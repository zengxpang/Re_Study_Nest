import { IsNotEmpty, MinLength } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';
import { I18nTranslations } from '../../../../../dist/apps/my-i18n/i18n.generated';

export class CreateUserDto {
  @IsNotEmpty({
    message: i18nValidationMessage<I18nTranslations>(
      'validate.usernameNotEmpty',
    ),
    // message: 'test.hello',
  })
  username: string;

  @IsNotEmpty({
    message: i18nValidationMessage<I18nTranslations>(
      'validate.passwordNotEmpty',
    ),
  })
  @MinLength(6, {
    message: i18nValidationMessage<I18nTranslations>(
      'validate.passwordNotLessThan6',
      { num: 88 },
    ),
  })
  password: string;
}
