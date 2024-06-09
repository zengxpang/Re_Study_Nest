import { Injectable } from '@nestjs/common';

@Injectable()
export class MyConfigService {
  getHello(): string {
    return 'Hello World!';
  }
}
