import { Module } from '@nestjs/common';
import { ECityWeatherController } from './e-city-weather.controller';
import { ECityWeatherService } from './e-city-weather.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
    }),
  ],
  controllers: [ECityWeatherController],
  providers: [ECityWeatherService],
})
export class ECityWeatherModule {}
