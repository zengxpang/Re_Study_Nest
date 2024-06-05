import { Controller, Get, Query } from '@nestjs/common';
import { ECityWeatherService } from './e-city-weather.service';
import pinyin from 'pinyin';

@Controller()
export class ECityWeatherController {
  constructor(private readonly eCityWeatherService: ECityWeatherService) {}

  @Get()
  getHello(): string {
    return this.eCityWeatherService.getHello();
  }

  @Get('text')
  getText(@Query('text') text: string): string {
    return pinyin(text, {
      style: pinyin.STYLE_NORMAL,
    }).join('');
  }

  @Get('weather')
  getWeather(@Query('city') city: string): Promise<Record<string, any>> {
    return this.eCityWeatherService.getWeather(city);
  }
}
