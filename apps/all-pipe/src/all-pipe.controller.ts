import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseEnumPipe,
  ParseFloatPipe,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { AllPipeService } from './all-pipe.service';
import { APipe } from './a/a.pipe';
import { GDto } from './dto/g.dto';
import { HDto } from './dto/h.Dto';

enum Ccc {
  AA = '11',
  BB = '22',
  CC = '33',
}

@Controller()
export class AllPipeController {
  constructor(private readonly allPipeService: AllPipeService) {}

  // 把参数转成int类型（规定只能传number类型）
  @Get()
  getHello(@Query('name', ParseIntPipe) name: string): string {
    console.log(typeof name);
    return name + 1;
  }

  @Get('hello2')
  getHello2(
    @Query(
      'name',
      new ParseIntPipe({
        // errorHttpStatusCode: HttpStatus.NOT_FOUND,
        exceptionFactory: (msg) => {
          throw new HttpException('zxp', HttpStatus.NOT_FOUND);
        },
      }),
    )
    name: string,
  ): string {
    console.log(typeof name);
    return name + 1;
  }

  // 把参数转成float类型
  @Get('hello3')
  getHello3(@Query('age', ParseFloatPipe) age: number) {
    return age + 1;
  }

  @Get('a')
  getA(@Query('a', ParseBoolPipe) a: boolean) {
    return typeof a;
  }

  @Get('b')
  getB(
    @Query(
      'b',
      new ParseArrayPipe({
        items: Number,
        separator: '-',
        // optional: true,
      }),
    )
    b: Array<number>,
  ) {
    return b.reduce((prev, curr) => prev + curr, 0);
  }

  @Get('c/:enum')
  getC(@Param('enum', new ParseEnumPipe(Ccc)) c: Ccc) {
    return c;
  }

  @Get('d/:uuid')
  getD(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return uuid;
  }

  @Get('e')
  getE(@Query('e', new DefaultValuePipe('e')) e: string) {
    return e;
  }

  @Get('f/:f2')
  getF(@Query('f1', APipe) f1: string, @Param('f2', APipe) f2: number) {
    return f1 + f2;
  }

  @Post('g')
  getG(@Body() obj: GDto) {
    console.log(obj);
    return JSON.stringify(obj);
  }

  @Post('h')
  getH(@Body() obj: HDto) {
    console.log(obj);
    return JSON.stringify(obj);
  }
}
