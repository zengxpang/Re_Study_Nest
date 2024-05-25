import { Module } from '@nestjs/common';
import { TheDynamic2Controller } from './the-dynamic2.controller';
import { ConfigurableModuleClass } from './the-dynamic2-module-definition';

@Module({
  controllers: [TheDynamic2Controller],
})
export class TheDynamic2Module extends ConfigurableModuleClass {}
