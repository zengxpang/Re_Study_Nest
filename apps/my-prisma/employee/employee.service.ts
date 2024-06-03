import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EmployeeService {
  @Inject(PrismaService)
  private prismaService: PrismaService;

  async create(data: Prisma.EmployeeCreateInput) {
    return this.prismaService.employee.create({
      data,
    });
  }
}
