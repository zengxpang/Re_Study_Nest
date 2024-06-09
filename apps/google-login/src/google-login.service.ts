import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleLoginService {
  getHello(): string {
    return 'Hello World!';
  }
}
