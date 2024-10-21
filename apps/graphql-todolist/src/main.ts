import { NestFactory } from '@nestjs/core';
import { GraphqlTodolistModule } from './graphql-todolist.module';

async function bootstrap() {
  const app = await NestFactory.create(GraphqlTodolistModule);
  await app.listen(3000);
}
bootstrap();
