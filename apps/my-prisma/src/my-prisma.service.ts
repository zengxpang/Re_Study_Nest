import { Injectable } from '@nestjs/common';

@Injectable()
export class MyPrismaService {
  getHello(): string {
    return 'Hello World!';
  }
}
