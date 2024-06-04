import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionAndJwtService {
  getHello(): string {
    return 'Hello World!';
  }
}
