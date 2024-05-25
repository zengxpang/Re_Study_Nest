import { Injectable } from '@nestjs/common';

@Injectable()
export class AllProviderService {
  getHello(): string {
    return 'Hello World   3223423!';
  }
}
