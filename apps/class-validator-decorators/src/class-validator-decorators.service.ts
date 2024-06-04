import { Injectable } from '@nestjs/common';

@Injectable()
export class ClassValidatorDecoratorsService {
  getHello(): string {
    return 'Hello World!';
  }
}
