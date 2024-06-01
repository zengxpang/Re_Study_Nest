import { Module } from '@nestjs/common';
import { TheLoggerController } from './the-logger.controller';
import { TheLoggerService } from './the-logger.service';
import { WinstonModule } from './winston/winston.module';
import { format, transports } from 'winston';
import * as chalk from 'chalk';

@Module({
  imports: [
    WinstonModule.forRoot({
      level: 'debug',
      format: format.combine(
        format.colorize(),
        format.printf(({ context, level, message, time }) => {
          const appStr = chalk.green(`[NEST]`);
          const contextStr = chalk.yellow(`[${context}]`);

          return `${appStr} ${time} ${level} ${contextStr} ${message} `;
        }),
      ),
      transports: [
        new transports.Console(),
        new transports.File({
          format: format.combine(format.timestamp(), format.json()),
          filename: 'zxp.log',
          dirname: 'logs',
          maxsize: 1024 * 1024 * 10, // 10MB
        }),
      ],
    }),
  ],
  controllers: [TheLoggerController],
  providers: [TheLoggerService],
})
export class TheLoggerModule {}
