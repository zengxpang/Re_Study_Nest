import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DepartmentService {
  @Inject(PrismaService)
  private prismaService: PrismaService;

  async create(data: Prisma.DepartmentCreateInput) {
    return this.prismaService.department.create({
      data,
    });
  }
}
