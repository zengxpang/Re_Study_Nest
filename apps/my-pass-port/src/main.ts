import { NestFactory } from '@nestjs/core';
import { MyPassPortModule } from './my-pass-port.module';

async function bootstrap() {
  const app = await NestFactory.create(MyPassPortModule);
  await app.listen(3000);
}
bootstrap();
