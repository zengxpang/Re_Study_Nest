import { Controller, Get } from '@nestjs/common';
import { MyI18nService } from './my-i18n.service';
import { I18n, I18nContext } from 'nestjs-i18n';
import { I18nTranslations } from '../../../dist/apps/my-i18n/i18n.generated';

@Controller()
export class MyI18nController {
  constructor(private readonly myI18nService: MyI18nService) {}

  @Get()
  getHello(): string {
    return this.myI18nService.getHello();
  }

  @Get('test')
  getTest(@I18n() i18n: I18nContext<I18nTranslations>) {
    return i18n.t('test.hello', { args: { name: 'Nest2' } });
  }
}
