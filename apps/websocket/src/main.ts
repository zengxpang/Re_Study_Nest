import { NestFactory } from '@nestjs/core';
import { WebsocketModule } from './websocket.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(WebsocketModule);
  app.useStaticAssets('pages');

  await app.listen(3000);
}
bootstrap();
