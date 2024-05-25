import { Module } from '@nestjs/common';
import { BaseReqService } from './base-req.service';
import { BaseReqController } from './base-req.controller';

@Module({
  controllers: [BaseReqController],
  providers: [BaseReqService],
})
export class BaseReqModule {}
