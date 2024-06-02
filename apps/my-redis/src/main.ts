import { NestFactory } from '@nestjs/core';
import { MyRedisModule } from './my-redis.module';

async function bootstrap() {
  const app = await NestFactory.create(MyRedisModule);
  await app.listen(3000);
}
bootstrap();
