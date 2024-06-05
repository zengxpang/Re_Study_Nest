import { Module } from '@nestjs/common';
import { MyPassPortController } from './my-pass-port.controller';
import { MyPassPortService } from './my-pass-port.service';

@Module({
  imports: [],
  controllers: [MyPassPortController],
  providers: [MyPassPortService],
})
export class MyPassPortModule {}
