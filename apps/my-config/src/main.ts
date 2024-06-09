import { NestFactory } from '@nestjs/core';
import { MyConfigModule } from './my-config.module';

async function bootstrap() {
  const app = await NestFactory.create(MyConfigModule);
  await app.listen(3000);
}
bootstrap();
