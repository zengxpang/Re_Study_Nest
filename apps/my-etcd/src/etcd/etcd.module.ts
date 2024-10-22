import { DynamicModule, Module } from '@nestjs/common';
import { EtcdService } from './etcd.service';
import { Etcd3, IOptions } from 'etcd3';

export const ETCD_CLIENT_TOKEN = 'ETCD_CLIENT';
export const ETCD_MODULE_OPTIONS_TOKEN = 'ETCD_MODULE_OPTIONS';
export interface EtcdModuleAsyncOptions {
  useFactory: (...args: any[]) => Promise<IOptions> | IOptions;
  inject?: any[];
}

@Module({})
export class EtcdModule {
  static forRoot(options?: IOptions): DynamicModule {
    return {
      module: EtcdModule,
      providers: [
        EtcdService,
        {
          provide: ETCD_MODULE_OPTIONS_TOKEN,
          useValue: options,
        },
        {
          provide: ETCD_CLIENT_TOKEN,
          useFactory: (options: IOptions) => {
            return new Etcd3(options);
          },
          inject: [ETCD_MODULE_OPTIONS_TOKEN],
        },
      ],
      exports: [EtcdService],
    };
  }

  static forRootAsync(options: EtcdModuleAsyncOptions): DynamicModule {
    return {
      module: EtcdModule,
      providers: [
        EtcdService,
        {
          provide: ETCD_MODULE_OPTIONS_TOKEN,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
        {
          provide: ETCD_CLIENT_TOKEN,
          useFactory: (options: IOptions) => {
            return new Etcd3(options);
          },
          inject: [ETCD_MODULE_OPTIONS_TOKEN],
        },
      ],
      exports: [EtcdService],
    };
  }
}
