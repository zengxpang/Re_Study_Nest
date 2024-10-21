import { Injectable } from '@nestjs/common';

@Injectable()
export class GraphqlCrudService {
  getHello(): string {
    return 'Hello World!';
  }
}
