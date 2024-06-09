import { NestFactory } from '@nestjs/core';
import { GithubLoginModule } from './github-login.module';

async function bootstrap() {
  const app = await NestFactory.create(GithubLoginModule);
  await app.listen(3000);
}
bootstrap();
