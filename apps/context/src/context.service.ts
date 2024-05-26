import { Injectable } from '@nestjs/common';

@Injectable()
export class ContextService {
  getHello(): string {
    return 'Hello World!';
  }
}
