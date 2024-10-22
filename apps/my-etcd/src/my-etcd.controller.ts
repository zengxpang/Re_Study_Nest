import { Controller, Get, Inject, Query } from '@nestjs/common';
import { MyEtcdService } from './my-etcd.service';
import { EtcdService } from './etcd/etcd.service';

@Controller()
export class MyEtcdController {
  constructor(private readonly myEtcdService: MyEtcdService) {}

  @Inject(EtcdService)
  private readonly etcdService: EtcdService;

  @Get('save')
  async save(@Query('value') value: string) {
    await this.etcdService.saveConfig('aaa', value);
    return 'success';
  }

  @Get('get')
  async get() {
    return await this.etcdService.getConfig('aaa');
  }

  @Get('delete')
  async delete() {
    await this.etcdService.deleteConfig('aaa');
    return 'success';
  }
}
