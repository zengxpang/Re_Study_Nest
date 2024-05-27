import {
  Controller,
  Get,
  Headers,
  HostParam,
  HttpCode,
  HttpException,
  HttpStatus,
  Inject,
  Ip,
  Next,
  Optional,
  Redirect,
  Render,
  Req,
  Res,
  Session,
  SetMetadata,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AllDecoratorService } from './all-decorator.service';
import { AFilter } from './a/a.filter';
import { AGuard } from './a/a.guard';
import { NextFunction, Request, Response } from 'express';
import { CustomA } from './custom-a/custom-a.decorator';
import { CustomC } from './custom-b/custom-b.decorator';

// @Controller({
//   host: ':host.0.0.1',
// })
@Controller()
@UseGuards(AGuard)
@SetMetadata('roles', ['user'])
export class AllDecoratorController {
  constructor(private readonly allDecoratorService: AllDecoratorService) {}

  @Optional()
  @Inject('APP_NAME')
  appName: string;

  @SetMetadata('roles', ['admin'])
  @Get()
  getHello(): string {
    throw new HttpException('xxx', HttpStatus.BAD_REQUEST);
    return this.allDecoratorService.getHello();
  }

  @Get('header')
  getHeader(
    @Headers('Accept') accept: string,
    @Headers() header: Record<string, any>,
    @HostParam('host') host: string,
  ): string {
    // console.log('accept', accept);
    // console.log('header', header);
    console.log('host', host);
    return 'header';
  }

  @Get('ip')
  getIp(@Ip() ip: string): string {
    console.log('ip', ip);
    return 'ip';
  }

  @Get('session')
  getSession(@Session() session: Record<string, any>): string {
    if (!session.count) {
      session.count = 0;
    }
    session.count = session.count + 1;
    console.log('session', session);
    return session.count.toString();
  }

  @Get('req')
  getReq(
    @Req() req: Request,
    @Res({
      passthrough: true,
    })
    res: Response,
  ): string {
    return 'res';
  }

  @Get('next')
  getNext(@Next() next: NextFunction): string {
    console.log('next1');
    next();
    return 'next';
  }

  @Get('next')
  @HttpCode(333)
  getNext2(): string {
    console.log('next2');
    return 'next2';
  }

  @Get('redirect')
  @Redirect('https://nestjs.com', 301)
  getRedirect(): void {
    //
  }

  @Get('user')
  @Render('user')
  getUser(): Record<string, any> {
    return {
      name: 'zxp',
      age: 25,
    };
  }

  @Get('custom-a')
  @CustomA('a', 'b')
  getCustomA(@CustomC('zxp') c): string {
    return c;
  }
}
