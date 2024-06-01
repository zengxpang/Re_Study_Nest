import { Injectable } from '@nestjs/common';

@Injectable()
export class TheLoggerService {
  getHello(): string {
    return 'Hello World!';
  }
}
