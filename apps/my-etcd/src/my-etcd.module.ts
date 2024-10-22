import { Module } from '@nestjs/common';
import { MyEtcdController } from './my-etcd.controller';
import { MyEtcdService } from './my-etcd.service';
import { EtcdModule } from './etcd/etcd.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as path from 'path';
import * as process from 'process';

console.log(path.join(process.cwd() + '/apps/my-etcd', '.env'));

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [path.join(process.cwd() + '/apps/my-etcd', '.env')],
    }),
    // 同步动态模块
    // EtcdModule.forRoot({
    //   hosts: 'http://localhost:2379',
    // }),
    // 异步动态模块
    EtcdModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return {
          hosts: configService.get('ETCD_HOSTS'),
          // hosts: 'http://localhost:2379',
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [MyEtcdController],
  providers: [MyEtcdService],
})
export class MyEtcdModule {}
