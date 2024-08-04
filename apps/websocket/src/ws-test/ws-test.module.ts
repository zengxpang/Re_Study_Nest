import { Module } from '@nestjs/common';
import { WsTestService } from './ws-test.service';
import { WsTestGateway } from './ws-test.gateway';

@Module({
  providers: [WsTestGateway, WsTestService],
})
export class WsTestModule {}
