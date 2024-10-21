import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { TodolistCreateDto } from './dto/todolist-create.dto';
import { TodolistUpdateDto } from './dto/todolist-update.dto';

@Injectable()
export class GraphqlTodolistService {
  @Inject(PrismaService)
  private readonly prismaService: PrismaService;

  getHello(): string {
    return 'Hello World!';
  }

  async query() {
    return this.prismaService.todoItem.findMany({
      select: {
        id: true,
        content: true,
        createTime: true,
      },
    });
  }

  async create(todoItem: TodolistCreateDto) {
    return this.prismaService.todoItem.create({
      data: todoItem,
      select: {
        id: true,
        content: true,
        createTime: true,
      },
    });
  }

  async update(todoItem: TodolistUpdateDto) {
    return this.prismaService.todoItem.update({
      data: todoItem,
      where: {
        id: todoItem.id,
      },
      select: {
        id: true,
        content: true,
        createTime: true,
      },
    });
  }

  async remove(id: number) {
    return this.prismaService.todoItem.delete({
      where: {
        id: id,
      },
    });
  }
}
