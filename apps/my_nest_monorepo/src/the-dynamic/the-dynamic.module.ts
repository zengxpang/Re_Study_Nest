import { DynamicModule, Module } from '@nestjs/common';
import { TheDynamicService } from './the-dynamic.service';
import { TheDynamicController } from './the-dynamic.controller';

@Module({})
export class TheDynamicModule {
  // register：用一次模块传一次配置
  // forRoot：配置一次模块用多次，比如 XxxModule.forRoot({}) 一次，之后就一直用这个 Module，一般在 AppModule 里 import
  // forFeature：用了 forRoot 固定了整体模块，用于局部的时候，可能需要再传一些配置，比如用 forRoot 指定了数据库链接信息，再用 forFeature 指定某个模块访问哪个数据库和表
  static register(options: Record<string, any>): DynamicModule {
    return {
      module: TheDynamicModule,
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
        TheDynamicService,
      ],
      controllers: [TheDynamicController],
      exports: [],
    };
  }
}
