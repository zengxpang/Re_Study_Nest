import { ConfigurableModuleBuilder } from '@nestjs/common';

interface ITheDynamic2ModuleOptions {
  name: string;
  description: string;
}

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  ASYNC_OPTIONS_TYPE,
  OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<ITheDynamic2ModuleOptions>()
  .setClassMethodName('register')
  .setExtras(
    {
      isGlobal: false,
    },
    (definition, extras) => ({
      ...definition,
      global: extras.isGlobal,
    }),
  )
  .build();
