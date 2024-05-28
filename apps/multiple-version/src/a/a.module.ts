import { Module } from '@nestjs/common';
import { AService } from './a.service';
import { AController } from './a.controller';
import { AV2Controller } from './a-v2.controller';

@Module({
  controllers: [AV2Controller, AController], // 一定要版本2在前面
  providers: [AService],
})
export class AModule {}
