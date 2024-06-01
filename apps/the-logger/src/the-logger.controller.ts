import { Controller, Get, Inject } from '@nestjs/common';
import { TheLoggerService } from './the-logger.service';
import { MyLogger } from './winston/myLogger';
import { WINSTON_LOGGER_TOKEN } from './winston/winston.module';

@Controller()
export class TheLoggerController {
  constructor(private readonly theLoggerService: TheLoggerService) {}

  @Inject(WINSTON_LOGGER_TOKEN)
  private readonly logger: MyLogger;

  @Get()
  getHello(): string {
    this.logger.log('Hello from the logger', TheLoggerController.name);
    return this.theLoggerService.getHello();
  }
}
