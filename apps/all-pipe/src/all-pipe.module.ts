import { Module } from '@nestjs/common';
import { AllPipeController } from './all-pipe.controller';
import { AllPipeService } from './all-pipe.service';

@Module({
  imports: [],
  controllers: [AllPipeController],
  providers: [AllPipeService],
})
export class AllPipeModule {}
