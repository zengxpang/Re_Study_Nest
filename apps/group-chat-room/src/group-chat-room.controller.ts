import { Controller, Get } from '@nestjs/common';
import { GroupChatRoomService } from './group-chat-room.service';

@Controller()
export class GroupChatRoomController {
  constructor(private readonly groupChatRoomService: GroupChatRoomService) {}

  @Get()
  getHello(): string {
    return this.groupChatRoomService.getHello();
  }
}
