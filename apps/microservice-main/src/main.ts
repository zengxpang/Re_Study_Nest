import { NestFactory } from '@nestjs/core';
import { MicroserviceMainModule } from './microservice-main.module';

async function bootstrap() {
  const app = await NestFactory.create(MicroserviceMainModule);
  await app.listen(3000);
}
bootstrap();
