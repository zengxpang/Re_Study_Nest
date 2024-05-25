import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalOtherService {
  yyy(): string {
    return 'yyy';
  }
}
