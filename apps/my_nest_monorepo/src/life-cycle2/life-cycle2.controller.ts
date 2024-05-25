import {
  Controller,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { LifeCycle2Service } from './life-cycle2.service';

@Controller('life-cycle2')
export class LifeCycle2Controller
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private readonly lifeCycle2Service: LifeCycle2Service) {}

  onModuleInit() {
    console.log('LifeCycle2Controller onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('LifeCycle2Controller onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('LifeCycle2Controller onModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('LifeCycle2Controller beforeApplicationShutdown');
  }

  onApplicationShutdown() {
    console.log('LifeCycle2Controller onApplicationShutdown');
  }
}
