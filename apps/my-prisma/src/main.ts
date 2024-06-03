import { NestFactory } from '@nestjs/core';
import { MyPrismaModule } from './my-prisma.module';

async function bootstrap() {
  const app = await NestFactory.create(MyPrismaModule);
  await app.listen(3000);
}
bootstrap();
