import { NestFactory } from '@nestjs/core';
import { AllPipeModule } from './all-pipe.module';

async function bootstrap() {
  const app = await NestFactory.create(AllPipeModule);
  await app.listen(3000);
}
bootstrap();
