import { Injectable } from '@nestjs/common';

@Injectable()
export class AllDecoratorService {
  getHello(): string {
    return 'Hello World!';
  }
}
