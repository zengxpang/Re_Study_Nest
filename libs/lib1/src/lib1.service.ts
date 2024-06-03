import { Injectable } from '@nestjs/common';

@Injectable()
export class Lib1Service {
  publicMethod(): string {
    return 'I am a public method';
  }
}
