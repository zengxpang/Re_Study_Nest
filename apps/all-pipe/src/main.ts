import { NestFactory } from '@nestjs/core';
import { AllPipeModule } from './all-pipe.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AllPipeModule);
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
