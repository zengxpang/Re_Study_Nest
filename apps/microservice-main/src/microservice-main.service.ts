import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceMainService {
  getHello(): string {
    return 'Hello World!';
  }
}
