import { Injectable } from '@nestjs/common';

@Injectable()
export class AllInterceptorService {
  getHello(): string {
    return 'Hello World!';
  }
}
