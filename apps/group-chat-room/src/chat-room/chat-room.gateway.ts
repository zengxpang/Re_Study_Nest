import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class ChatRoomGateway {
  @WebSocketServer() server: Server;

  @SubscribeMessage('joinRoom')
  handleJoinRoom(
    client: Socket,
    payload: {
      roomName: string;
      nickname: string;
    },
  ) {
    client.join(payload.roomName);
    this.server.to(payload.roomName).emit('message', {
      nickname: payload.nickname,
      message: `${payload.nickname}加入了${payload.roomName}房间`,
    });
  }

  @SubscribeMessage('sendMessage')
  handleSendMessage(
    client: Socket,
    payload: {
      room: string;
      nickname: string;
      message: string;
    },
  ) {
    console.log('payload', payload);
    this.server.to(payload.room).emit('message', {
      nickname: payload.nickname,
      message: payload.message,
    });
  }

  // 与上面的handleSendMessage等效
  // @SubscribeMessage('sendMessage2')
  // handleSendMessage2(@MessageBody() payload: any) {
  //   console.log('payload', payload);
  //   this.server.to(payload.room).emit('message', payload.message);
  // }
}
