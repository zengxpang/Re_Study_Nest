import { NestFactory } from '@nestjs/core';
import { AllProviderModule } from './all-provider.module';

async function bootstrap() {
  const app = await NestFactory.create(AllProviderModule);
  await app.listen(3000);
}
bootstrap();
