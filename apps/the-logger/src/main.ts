import { NestFactory } from '@nestjs/core';
import { TheLoggerModule } from './the-logger.module';
import { WINSTON_LOGGER_TOKEN } from './winston/winston.module';

async function bootstrap() {
  const app = await NestFactory.create(TheLoggerModule);
  // nest logger 走自定义的 logger
  app.useLogger(app.get(WINSTON_LOGGER_TOKEN));
  await app.listen(3000);
}
bootstrap();
