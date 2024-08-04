import { NestFactory } from '@nestjs/core';
import { GroupChatRoomModule } from './group-chat-room.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app =
    await NestFactory.create<NestExpressApplication>(GroupChatRoomModule);
  app.useStaticAssets('pages');
  await app.listen(3000);
}
bootstrap();
