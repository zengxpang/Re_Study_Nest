import { NestFactory } from '@nestjs/core';
import { ECityWeatherModule } from './e-city-weather.module';

async function bootstrap() {
  const app = await NestFactory.create(ECityWeatherModule);
  await app.listen(3000);
}
bootstrap();
