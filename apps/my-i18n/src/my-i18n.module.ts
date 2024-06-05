import { Module } from '@nestjs/common';
import * as path from 'path';
import {
  AcceptLanguageResolver,
  CookieResolver,
  HeaderResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';

import { MyI18nController } from './my-i18n.controller';
import { MyI18nService } from './my-i18n.service';
import { UserModule } from './user/user.module';

console.log(11, path.join(__dirname, './i18n/'));
console.log(12, path.join(__dirname, 'i18n.generated.ts'));

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en', // The default language
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'), // The path to the i18n JSON files
        watch: true, // Enable live reloading
      },
      typesOutputPath: path.join(__dirname, 'i18n.generated.ts'),
      resolvers: [
        new QueryResolver(['lang', 'l']),
        new HeaderResolver(['x-custom-lang']),
        new CookieResolver(['lang']),
        AcceptLanguageResolver,
      ],
    }),
    UserModule,
  ],
  controllers: [MyI18nController],
  providers: [MyI18nService],
})
export class MyI18nModule {}
