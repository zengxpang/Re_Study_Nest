import { NestFactory } from '@nestjs/core';
import { MulterUploadModule } from './multer-upload.module';

async function bootstrap() {
  const app = await NestFactory.create(MulterUploadModule);
  await app.listen(3000);
}
bootstrap();
