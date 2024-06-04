import { NestFactory } from '@nestjs/core';
import { ClassValidatorDecoratorsModule } from './class-validator-decorators.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ClassValidatorDecoratorsModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
