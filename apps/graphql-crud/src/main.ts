import { NestFactory } from '@nestjs/core';
import { GraphqlCrudModule } from './graphql-crud.module';

async function bootstrap() {
  const app = await NestFactory.create(GraphqlCrudModule);
  await app.listen(3000);
}
bootstrap();
