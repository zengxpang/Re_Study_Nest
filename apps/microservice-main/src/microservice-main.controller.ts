import { Controller, Get, Inject, Query } from '@nestjs/common';
import { MicroserviceMainService } from './microservice-main.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class MicroserviceMainController {
  constructor(
    private readonly microserviceMainService: MicroserviceMainService,
  ) {}

  @Get()
  getHello(): string {
    return this.microserviceMainService.getHello();
  }

  @Inject('USER_SERVICE')
  private readonly userClient: ClientProxy;

  @Get('sum')
  getSum(@Query('num') str: string) {
    const numberArr = str.split(',').map((item) => parseInt(item));
    this.userClient.emit('log', '我要求合');
    return this.userClient.send<number>('sum', numberArr);
  }
}
