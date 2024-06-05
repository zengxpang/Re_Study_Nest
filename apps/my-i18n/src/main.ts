import { NestFactory } from '@nestjs/core';
import { MyI18nModule } from './my-i18n.module';
import { ValidationPipe } from '@nestjs/common';
import { I18nValidationExceptionFilter, I18nValidationPipe } from 'nestjs-i18n';

async function bootstrap() {
  const app = await NestFactory.create(MyI18nModule);
  // app.useGlobalPipes(new ValidationPipe());
  app.useGlobalPipes(new I18nValidationPipe());
  app.useGlobalFilters(
    new I18nValidationExceptionFilter({
      detailedErrors: false,
    }),
  );
  await app.listen(3000);
}
bootstrap();
