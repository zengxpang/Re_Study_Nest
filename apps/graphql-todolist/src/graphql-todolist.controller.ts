import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { GraphqlTodolistService } from './graphql-todolist.service';
import { TodolistUpdateDto } from './dto/todolist-update.dto';
import { TodolistCreateDto } from './dto/todolist-create.dto';

@Controller()
export class GraphqlTodolistController {
  constructor(
    private readonly graphqlTodolistService: GraphqlTodolistService,
  ) {}

  @Get()
  getHello(): string {
    return this.graphqlTodolistService.getHello();
  }

  @Get('query')
  async query() {
    return this.graphqlTodolistService.query();
  }

  @Post('create')
  async create(@Body() todoItem: TodolistCreateDto) {
    return this.graphqlTodolistService.create(todoItem);
  }

  @Post('update')
  async update(@Body() todoItem: TodolistUpdateDto) {
    return this.graphqlTodolistService.update(todoItem);
  }

  @Get('remove')
  async remove(@Query('id', ParseIntPipe) id: number) {
    return this.graphqlTodolistService.remove(id);
  }
}
