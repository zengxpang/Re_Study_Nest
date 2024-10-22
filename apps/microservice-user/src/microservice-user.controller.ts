import { Controller, Get } from '@nestjs/common';
import { MicroserviceUserService } from './microservice-user.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class MicroserviceUserController {
  constructor(
    private readonly microserviceUserService: MicroserviceUserService,
  ) {}

  @MessagePattern('sum')
  sum(numArray: number[]): number {
    return numArray.reduce((prev, curr) => prev + curr, 0);
  }

  @EventPattern('log')
  log(str: string) {
    console.log(str);
  }
}
