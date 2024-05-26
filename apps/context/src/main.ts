import { NestFactory } from '@nestjs/core';
import { ContextModule } from './context.module';
import { AFilter } from './a/a.filter';

async function bootstrap() {
  const app = await NestFactory.create(ContextModule);
  // app.useGlobalFilters(new AFilter());
  await app.listen(3000);
}
bootstrap();
