import { Module } from '@nestjs/common';
import { WebsocketController } from './websocket.controller';
import { WebsocketService } from './websocket.service';
import { WsTestModule } from './ws-test/ws-test.module';

@Module({
  imports: [WsTestModule],
  controllers: [WebsocketController],
  providers: [WebsocketService],
})
export class WebsocketModule {}
