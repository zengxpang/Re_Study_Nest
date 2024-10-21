import { Controller, Get } from '@nestjs/common';
import { GraphqlCrudService } from './graphql-crud.service';

@Controller()
export class GraphqlCrudController {
  constructor(private readonly graphqlCrudService: GraphqlCrudService) {}

  @Get()
  getHello(): string {
    return this.graphqlCrudService.getHello();
  }
}
