import { Inject, Injectable } from '@nestjs/common';
import { I18nContext, I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../../../dist/apps/my-i18n/i18n.generated';

@Injectable()
export class MyI18nService {
  @Inject(I18nService)
  private readonly i18n: I18nService<I18nTranslations>;

  getHello(): string {
    console.log(I18nContext.current().lang);
    return this.i18n.t('test.hello', {
      lang: I18nContext.current().lang,
      args: { name: 'Nest' },
    });
  }
}
