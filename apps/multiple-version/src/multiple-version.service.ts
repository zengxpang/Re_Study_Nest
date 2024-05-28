import { Injectable } from '@nestjs/common';

@Injectable()
export class MultipleVersionService {
  getHello(): string {
    return 'Hello World!';
  }
}
