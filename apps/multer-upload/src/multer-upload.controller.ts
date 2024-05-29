import {
  Body,
  Controller,
  FileTypeValidator,
  HttpException,
  HttpStatus,
  ParseFilePipe,
  Post,
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
}
