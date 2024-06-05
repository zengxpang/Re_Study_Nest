import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import pinyin from 'pinyin';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ECityWeatherService {
  @Inject(HttpService)
  private readonly httpService: HttpService;

  getHello(): string {
    return 'Hello World!';
  }

  async getWeather(city: string): Promise<Record<string, any>> {
    const cityPinyin = pinyin(city, {
      style: pinyin.STYLE_NORMAL,
    }).join('');
    const { data } = await firstValueFrom(
      this.httpService.get(
        `https://geoapi.qweather.com/v2/city/lookup?location=${cityPinyin}&key=ef30531b514e496ebc30ff9ad036ed5f`,
      ),
    );
    const location = data?.location?.[0];
    if (!location) {
      throw new BadRequestException('没有找到该城市对应的天气信息');
    }
    const { data: weatherData } = await firstValueFrom(
      this.httpService.get(
        `https://devapi.qweather.com/v7/weather/7d?location=${location.id}&key=ef30531b514e496ebc30ff9ad036ed5f`,
      ),
    );
    // todo redis 一天一个城市只请求一次
    return weatherData;
  }
}
