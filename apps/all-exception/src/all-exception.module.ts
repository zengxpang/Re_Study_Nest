import { Module, ValidationPipe } from '@nestjs/common';
import { AllExceptionController } from './all-exception.controller';
import { AllExceptionService } from './all-exception.service';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { HelloFilter } from './hello/hello.filter';
import { UnLoginFilter } from './unLogin.filter';

@Module({
  imports: [],
  controllers: [AllExceptionController],
  providers: [
    AllExceptionService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_FILTER,
      useClass: HelloFilter,
    },
    {
      provide: APP_FILTER,
      useClass: UnLoginFilter,
    },
  ],
})
export class AllExceptionModule {}
