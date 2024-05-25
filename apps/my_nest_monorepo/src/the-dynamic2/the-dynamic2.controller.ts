import { Controller, Get, Inject } from '@nestjs/common';
import {
  ASYNC_OPTIONS_TYPE,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
} from './the-dynamic2-module-definition';

@Controller('the-dynamic2')
export class TheDynamic2Controller {
  @Inject(MODULE_OPTIONS_TOKEN)
  private readonly options: typeof ASYNC_OPTIONS_TYPE;

  @Get()
  getOptions() {
    return this.options.isGlobal;
  }
}
