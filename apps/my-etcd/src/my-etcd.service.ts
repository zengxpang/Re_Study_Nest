import { Injectable } from '@nestjs/common';

@Injectable()
export class MyEtcdService {
  getHello(): string {
    return 'Hello World!';
  }
}
