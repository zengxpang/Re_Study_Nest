import { Controller, Get, Inject } from '@nestjs/common';
import { AService } from './a.service';

// 把版本2单独拆分出来
@Controller({
  version: '2',
  path: 'a',
})
export class AV2Controller {
  @Inject(AService)
  private readonly aService: AService;

  @Get()
  findAll() {
    console.log('version2');
    return this.aService.findAll() + 'version2';
  }
}
