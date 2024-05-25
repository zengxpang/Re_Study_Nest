import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { LifeCycle1Service } from './life-cycle1.service';
import { LifeCycle1Controller } from './life-cycle1.controller';
import { ModuleRef } from '@nestjs/core';

@Module({
  controllers: [LifeCycle1Controller],
  providers: [LifeCycle1Service],
})
export class LifeCycle1Module
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    console.log('LifeCycle1Module onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('LifeCycle1Module onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('LifeCycle1Module onModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('LifeCycle1Module beforeApplicationShutdown');
  }

  onApplicationShutdown() {
    const lifeCycle1Service = this.moduleRef.get(LifeCycle1Service);
    console.log(lifeCycle1Service.getHello());
    console.log('LifeCycle1Module onApplicationShutdown');
  }
}
