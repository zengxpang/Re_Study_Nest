import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { OtherService } from './other/other.service';
import { GlobalOtherService } from './global-other/global-other.service';

@Controller()
export class AppController {
  // 构造函数注入
  // constructor(private readonly appService: AppService) {}

  // constructor(private readonly globalOtherService: GlobalOtherService) {}

  // 属性注入
  @Inject(AppService)
  private readonly appService: AppService;

  @Inject(OtherService)
  private readonly otherService: OtherService;

  // @Inject(GlobalOtherService)
  // private readonly globalOtherService: GlobalOtherService;

  @Get()
  getHello(): string {
    return this.appService.getHello() + this.otherService.xxx();
  }
}
