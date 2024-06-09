import { Module } from '@nestjs/common';
import { MyConfigController } from './my-config.controller';
import { MyConfigService } from './my-config.service';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';
import * as process from 'process';
import config from '../config';
import config2 from '../config2';

console.log(process.cwd());

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: [path.join(process.cwd() + '/apps/my-config', '.env')],
      load: [config2, config],
    }),
  ],
  controllers: [MyConfigController],
  providers: [MyConfigService],
})
export class MyConfigModule {}
