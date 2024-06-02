import { Controller, Get } from '@nestjs/common';
import { MyRedisService } from './my-redis.service';

@Controller()
export class MyRedisController {
  constructor(private readonly myRedisService: MyRedisService) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.myRedisService.getHello();
  }
}
