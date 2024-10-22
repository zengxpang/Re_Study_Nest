import { NestFactory } from '@nestjs/core';
import { MyEtcdModule } from './my-etcd.module';

async function bootstrap() {
  const app = await NestFactory.create(MyEtcdModule);
  await app.listen(3000);
}
bootstrap();
