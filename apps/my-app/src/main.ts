import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { MyAppModule } from './my-app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MyAppModule);
  app.useStaticAssets('public', {
    prefix: '/static',
  });
  await app.listen(3000);
}
bootstrap();
