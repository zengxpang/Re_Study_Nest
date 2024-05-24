import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  // @Cron(CronExpression.EVERY_5_SECONDS)
  // @Interval(1000)
  @Timeout(5000)
  handleCron() {
    this.logger.debug('荣雪');
  }
}
