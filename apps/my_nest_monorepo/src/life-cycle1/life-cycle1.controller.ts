import {
  Controller,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { LifeCycle1Service } from './life-cycle1.service';

@Controller('life-cycle1')
export class LifeCycle1Controller
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private readonly lifeCycle1Service: LifeCycle1Service) {}

  onModuleInit() {
    console.log('LifeCycle1Controller onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('LifeCycle1Controller onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('LifeCycle1Controller onModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('LifeCycle1Controller beforeApplicationShutdown');
  }

  onApplicationShutdown() {
    console.log('LifeCycle1Controller onApplicationShutdown');
  }
}
