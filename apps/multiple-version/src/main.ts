import { NestFactory } from '@nestjs/core';
import { MultipleVersionModule } from './multiple-version.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MultipleVersionModule);
  const extractor = (request: Request) => {
    if (request.headers['disable-custom']) {
      return '';
    }
    return request.url.includes('zxp') ? '2' : '1';
  };

  app.enableVersioning({
    type: VersioningType.CUSTOM,
    extractor,
  });

  // app.enableVersioning({
  //   // type: VersioningType.HEADER,
  //   // header: 'version',
  //
  //   // type: VersioningType.MEDIA_TYPE,
  //   // key: 'vv=',
  //
  //   // type: VersioningType.URI,
  //
  // });
  await app.listen(3000);
}
bootstrap();
