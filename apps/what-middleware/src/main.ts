import { NestFactory } from '@nestjs/core';
import { WhatMiddlewareModule } from './what-middleware.module';

async function bootstrap() {
  const app = await NestFactory.create(WhatMiddlewareModule);
  await app.listen(3000);
}
bootstrap();
