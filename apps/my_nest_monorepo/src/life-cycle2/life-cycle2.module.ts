import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { LifeCycle2Service } from './life-cycle2.service';
import { LifeCycle2Controller } from './life-cycle2.controller';

@Module({
  controllers: [LifeCycle2Controller],
  providers: [LifeCycle2Service],
})
export class LifeCycle2Module
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log('LifeCycle2Module onModuleInit');
  }
  onApplicationBootstrap() {
    console.log('LifeCycle2Module onApplicationBootstrap');
  }
  onModuleDestroy() {
    console.log('LifeCycle2Module onModuleDestroy');
  }
  beforeApplicationShutdown(signal?: string) {
    console.log('LifeCycle2Module beforeApplicationShutdown');
  }
  onApplicationShutdown() {
    console.log('LifeCycle2Module onApplicationShutdown');
  }
}
