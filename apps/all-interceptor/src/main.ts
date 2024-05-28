import { NestFactory } from '@nestjs/core';
import { AllInterceptorModule } from './all-interceptor.module';

async function bootstrap() {
  const app = await NestFactory.create(AllInterceptorModule);
  await app.listen(3000);
}
bootstrap();
