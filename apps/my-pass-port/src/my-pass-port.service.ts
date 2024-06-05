import { Injectable } from '@nestjs/common';

@Injectable()
export class MyPassPortService {
  getHello(): string {
    return 'Hello World!';
  }
}
