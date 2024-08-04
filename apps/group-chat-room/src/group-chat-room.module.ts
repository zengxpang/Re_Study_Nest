import { Module } from '@nestjs/common';
import { GroupChatRoomController } from './group-chat-room.controller';
import { GroupChatRoomService } from './group-chat-room.service';
import { ChatRoomModule } from './chat-room/chat-room.module';

@Module({
  imports: [ChatRoomModule],
  controllers: [GroupChatRoomController],
  providers: [GroupChatRoomService],
})
export class GroupChatRoomModule {}
