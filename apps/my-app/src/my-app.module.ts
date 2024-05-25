import { Module } from '@nestjs/common';
import { MyAppController } from './my-app.controller';
import { MyAppService } from './my-app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from '../tasks/tasks.service';
import { BaseReqModule } from './base-req/base-req.module';

@Module({
  imports: [ScheduleModule.forRoot(), BaseReqModule],
  controllers: [MyAppController],
  providers: [MyAppService],
})
export class MyAppModule {}
