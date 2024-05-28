import { NestFactory } from '@nestjs/core';
import { AllExceptionModule } from './all-exception.module';

async function bootstrap() {
  const app = await NestFactory.create(AllExceptionModule);

  await app.listen(3000);
}
bootstrap();
