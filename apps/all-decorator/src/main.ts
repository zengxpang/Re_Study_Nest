import { NestFactory } from '@nestjs/core';
import { AllDecoratorModule } from './all-decorator.module';
import * as session from 'express-session';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app =
    await NestFactory.create<NestExpressApplication>(AllDecoratorModule);

  app.useStaticAssets(join(__dirname, '../../../', 'public')); // 静态资源的路径
  app.setBaseViewsDir(join(__dirname, '../../../', 'views')); // 模版的路径
  app.setViewEngine('hbs'); // 模版引擎为 handlerbars

  app.use(
    session({
      secret: 'keyboard cat',
      cookie: { maxAge: 60000 },
    }),
  );
  await app.listen(3000);
}
bootstrap();
