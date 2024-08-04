import { Observable } from 'rxjs';
import { Server } from 'socket.io';
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';

import { WsTestService } from './ws-test.service';
import { CreateWsTestDto } from './dto/create-ws-test.dto';
import { UpdateWsTestDto } from './dto/update-ws-test.dto';

// @WebSocketGateway() 声明这是一个处理 WebSocket 请求的类
@WebSocketGateway()
export class WsTestGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  handleDisconnect(client: Server): any {}

  handleConnection(client: Server, ...args): any {}

  afterInit(server: Server): any {}

  constructor(private readonly wsTestService: WsTestService) {}

  @WebSocketServer()
  service: Server;

  // @MessageBody() 取出传过来的消息内容
  @SubscribeMessage('createWsTest')
  create(@MessageBody() createWsTestDto: CreateWsTestDto) {
    this.service.emit('zxp', 'hello world create'); // 和具体的平台耦合了，不建议使用
    return this.wsTestService.create(createWsTestDto);
  }

  @SubscribeMessage('findAllWsTest')
  findAll() {
    // return {
    //   event: 'zxp',
    //   data: this.wsTestService.findAll(),
    // };
    return new Observable((observer) => {
      observer.next({
        event: 'zxp',
        data: {
          msg: 'aaa',
        },
      });

      setTimeout(() => {
        observer.next({
          event: 'zxp',
          data: {
            msg: 'bbb',
          },
        });
      }, 2000);

      setTimeout(() => {
        observer.next({
          event: 'zxp',
          data: {
            msg: 'ccc',
          },
        });
      }, 5000);
    });
  }

  @SubscribeMessage('findOneWsTest')
  findOne(@MessageBody() id: number, @ConnectedSocket() server: Server) {
    server.emit('zxp', 'hello world findOne'); // 和具体的平台耦合了，不建议使用
    return this.wsTestService.findOne(id);
  }

  @SubscribeMessage('updateWsTest')
  update(@MessageBody() updateWsTestDto: UpdateWsTestDto) {
    return this.wsTestService.update(updateWsTestDto.id, updateWsTestDto);
  }

  @SubscribeMessage('removeWsTest')
  remove(@MessageBody() id: number) {
    return this.wsTestService.remove(id);
  }
}
