import { NestFactory } from '@nestjs/core';
import { GoogleLoginModule } from './google-login.module';

async function bootstrap() {
  const app = await NestFactory.create(GoogleLoginModule);
  await app.listen(3000);
}
bootstrap();
