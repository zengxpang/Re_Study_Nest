import { Controller, Get } from '@nestjs/common';
import { WhatMiddlewareService } from './what-middleware.service';

@Controller()
export class WhatMiddlewareController {
  constructor(private readonly whatMiddlewareService: WhatMiddlewareService) {}

  @Get('hello')
  getHello(): string {
    console.log('getHello');
    return this.whatMiddlewareService.getHello();
  }

  @Get('hello2')
  getHello2(): string {
    console.log('getHello2');
    return this.whatMiddlewareService.getHello();
  }

  @Get('hello3')
  getHello3(): string {
    console.log('getHello3');
    return this.whatMiddlewareService.getHello();
  }

  @Get('world')
  getWorld(): string {
    console.log('getWorld');
    return this.whatMiddlewareService.getHello();
  }
}
