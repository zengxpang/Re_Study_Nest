import { Injectable } from '@nestjs/common';

@Injectable()
export class AllPipeService {
  getHello(): string {
    return 'Hello World!';
  }
}
