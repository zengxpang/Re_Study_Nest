import { Injectable } from '@nestjs/common';

@Injectable()
export class AllExceptionService {
  getHello(): string {
    return 'Hello World!';
  }
}
