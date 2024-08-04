import { Injectable } from '@nestjs/common';

@Injectable()
export class GroupChatRoomService {
  getHello(): string {
    return 'Hello World!';
  }
}
