import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  HttpException,
  HttpStatus,
  ParseFilePipe,
  Post,
  Query,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  AnyFilesInterceptor,
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { Express } from 'express';
import { MyFileValidator } from './myFileValidator';
import * as fs from 'fs';

@Controller()
export class MulterUploadController {
  // 单文件上传
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      dest: 'uploads/',
    }),
  )
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        // exceptionFactory: (err) => {
        //   throw new HttpException('xxx' + err, HttpStatus.NOT_FOUND);
        // },
        errorHttpStatusCode: HttpStatus.FORBIDDEN,
        validators: [
          // new MaxFileSizeValidator({
          //   maxSize: 1000,
          // }),
          // new FileTypeValidator({
          //   fileType: 'image/jpeg',
          // }),
          new MyFileValidator({}),
        ],
      }),
    )
    file: Express.Multer.File,
    @Body() body: any,
  ) {
    console.log('body', body);
    console.log('file', file);
  }

  // 多文件（单字段）上传
  @Post('uploads')
  @UseInterceptors(
    FilesInterceptor('files', 2, {
      dest: 'uploads/',
    }),
  )
  async uploadFiles(
    @UploadedFiles()
    files: Express.Multer.File[],
    @Body() body: any,
  ) {
    console.log('body', body);
    console.log('files', files);
  }

  // 多文件(多字段)上传
  @Post('uploads2')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'avatar', maxCount: 1 },
      { name: 'background', maxCount: 1 },
    ]),
  )
  async uploadFiles2(
    @UploadedFiles()
    files: {
      avatar: Express.Multer.File[];
      background: Express.Multer.File[];
    },
    @Body() body: any,
  ) {
    console.log('body', body);
    console.log('files', files);
  }

  // 任意（多）文件
  @Post('uploads3')
  @UseInterceptors(AnyFilesInterceptor())
  uploadFiles3(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
  }

  @Post('chunkUploads')
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      dest: 'uploads/',
    }),
  )
  async uploadFilesChunk(
    @UploadedFiles()
    files: Express.Multer.File[],
    @Body()
    body: {
      name: string;
    },
  ) {
    const fileName = body.name.match(/(.+)\-\d+$/)[1];
    const chunkDir = `uploads/chunks_${fileName}`;
    if (!fs.existsSync(chunkDir)) {
      fs.mkdirSync(chunkDir);
    }
    fs.cpSync(files[0].path, `${chunkDir}/${body.name}`);
    fs.rmSync(files[0].path);
  }

  @Get('mergeChunks')
  mergeChunks(@Query('name') name: string) {
    const chunkDir = `uploads/chunks_${name}`;
    const files = fs.readdirSync(chunkDir);
    let count = 0;
    let startPos = 0;
    files.map((file) => {
      const filePath = `${chunkDir}/${file}`;
      const stream = fs.createReadStream(filePath);
      stream
        .pipe(fs.createWriteStream(`uploads/${name}`, { start: startPos }))
        .on('finish', () => {
          count++;
          if (count === files.length) {
            fs.rm(
              chunkDir,
              {
                recursive: true,
              },
              (err) => {
                if (err) {
                  console.error(err);
                }
              },
            );
          }
        });
      startPos += fs.statSync(filePath).size;
    });
  }
}
