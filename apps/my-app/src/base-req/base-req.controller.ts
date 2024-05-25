import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Logger,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { BaseReqService } from './base-req.service';
import { CreateBaseReqDto } from './dto/create-base-req.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('base-req')
export class BaseReqController {
  logger = new Logger('BaseReqController');
  constructor(private readonly baseReqService: BaseReqService) {}

  @Get('run-query')
  runQuery(@Query('name') name: string, @Query('age') age: number) {
    this.logger.log(name, age);
    return 100;
  }

  @Get(':id')
  runParam(@Param('id') id: string) {
    return `receiver id=${id}`;
  }

  // application/x-www-form-urlencoded  需求qs包裹参数
  // application/json 不需要qs包裹参数
  @Post('run-post')
  runPost(@Body() createBaseReqDto: CreateBaseReqDto) {
    console.log(createBaseReqDto);
    return `create name=${createBaseReqDto.name} age=${createBaseReqDto.age}`;
  }

  @Post('run-file')
  @UseInterceptors(
    AnyFilesInterceptor({
      dest: 'uploads/',
    }),
  )
  runFile(
    @Body() createBaseReqDto: CreateBaseReqDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    console.log(files);
    console.log(createBaseReqDto);
    return `create name=${createBaseReqDto.name} age=${createBaseReqDto.age}`;
  }
}
