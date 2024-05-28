import {
  BadGatewayException,
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AllExceptionService } from './all-exception.service';
import { ADto } from './dto/a.dto';
import { UnLoginException } from './unLogin.filter';

@Controller()
export class AllExceptionController {
  constructor(private readonly allExceptionService: AllExceptionService) {}

  @Get()
  getHello(): string {
    // throw new HttpException('xxx', HttpStatus.BAD_REQUEST);
    // throw new BadRequestException('xxxx');
    // throw new BadGatewayException('yyyy');
    throw new UnLoginException('zzzz');
    return this.allExceptionService.getHello();
  }

  @Post('a')
  getA(@Body() aDto: ADto): string {
    console.log(aDto);
    return 'success';
  }
}
