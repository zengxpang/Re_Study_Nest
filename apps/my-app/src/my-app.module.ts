import { Module } from '@nestjs/common';
import { MyAppController } from './my-app.controller';
import { MyAppService } from './my-app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from '../tasks/tasks.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [MyAppController],
  providers: [MyAppService],
})
export class MyAppModule {}
