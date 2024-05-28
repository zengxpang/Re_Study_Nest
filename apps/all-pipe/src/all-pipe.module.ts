import { Module, ValidationPipe } from '@nestjs/common';
import { AllPipeController } from './all-pipe.controller';
import { AllPipeService } from './all-pipe.service';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [AllPipeController],
  providers: [
    AllPipeService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AllPipeModule {}
