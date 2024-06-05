import { Controller, Get } from '@nestjs/common';
import { MyPassPortService } from './my-pass-port.service';

@Controller()
export class MyPassPortController {
  constructor(private readonly myPassPortService: MyPassPortService) {}

  @Get()
  getHello(): string {
    return this.myPassPortService.getHello();
  }
}
