import { Module } from '@nestjs/common';
import { AllInterceptorController } from './all-interceptor.controller';
import { AllInterceptorService } from './all-interceptor.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AInterceptor } from './a/a.interceptor';

@Module({
  imports: [],
  controllers: [AllInterceptorController],
  providers: [
    AllInterceptorService,
    {
      provide: APP_INTERCEPTOR,
      useClass: AInterceptor,
    },
  ],
})
export class AllInterceptorModule {}
