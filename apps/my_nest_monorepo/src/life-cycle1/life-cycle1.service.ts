import {
  BeforeApplicationShutdown,
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';

@Injectable()
export class LifeCycle1Service
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor() {}

  onModuleInit() {
    console.log('LifeCycle1Service onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('LifeCycle1Service onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('LifeCycle1Service onModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('LifeCycle1Service beforeApplicationShutdown');
  }

  onApplicationShutdown() {
    console.log('LifeCycle1Service onApplicationShutdown');
  }

  getHello(): string {
    return 'Hello from LifeCycle1Service!';
  }
}
