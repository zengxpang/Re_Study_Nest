import { Controller, Get, Inject } from '@nestjs/common';
import { MyConfigService } from './my-config.service';
import { ConfigService } from '@nestjs/config';

interface E {
  AAA: string;
  BBB: string;
}
@Controller()
export class MyConfigController {
  constructor(private readonly myConfigService: MyConfigService) {}

  @Inject()
  private readonly configService: ConfigService<E>;

  @Get()
  getHello() {
    return {
      aaa: this.configService.get('AAA', {
        infer: true,
      }),
      bbb: this.configService.get('BBB'),
      // db: this.configService.get('db'),
      // config: this.configService.get('aaa.bbb.ccc'),
    };
  }
}
