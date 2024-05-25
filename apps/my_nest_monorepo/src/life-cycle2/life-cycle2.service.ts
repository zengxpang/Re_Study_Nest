import {
  BeforeApplicationShutdown,
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';

@Injectable()
export class LifeCycle2Service
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor() {}

  onModuleInit() {
    console.log('LifeCycle2Service onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('LifeCycle2Service onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('LifeCycle2Service onModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('LifeCycle2Service beforeApplicationShutdown');
  }

  onApplicationShutdown() {
    console.log('LifeCycle2Service onApplicationShutdown');
  }
}
