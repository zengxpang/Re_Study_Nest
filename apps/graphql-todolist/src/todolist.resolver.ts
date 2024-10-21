import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { TodolistCreateDto } from './dto/todolist-create.dto';
import { TodolistUpdateDto } from './dto/todolist-update.dto';

@Resolver()
export class TodolistResolver {
  @Inject(PrismaService)
  private readonly prismaService: PrismaService;

  @Query('list')
  async list() {
    return this.prismaService.todoItem.findMany();
  }

  @Query('queryById')
  async queryById(@Args('id') id: number) {
    return this.prismaService.todoItem.findUnique({
      where: { id },
    });
  }

  @Mutation('createTodoItem')
  async createTodoItem(@Args('todoItem') todoItem: TodolistCreateDto) {
    return this.prismaService.todoItem.create({
      data: todoItem,
      select: {
        id: true,
        content: true,
        createTime: true,
      },
    });
  }

  @Mutation('updateTodoItem')
  async updateTodoItem(@Args('todoItem') todoItem: TodolistUpdateDto) {
    return this.prismaService.todoItem.update({
      where: {
        id: todoItem.id,
      },
      data: todoItem,
      select: {
        id: true,
        content: true,
        createTime: true,
      },
    });
  }

  @Mutation('removeTodoItem')
  async removeTodoItem(@Args('id') id: number) {
    await this.prismaService.todoItem.delete({
      where: { id },
    });
    return id;
  }
}
