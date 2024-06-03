import { Module } from '@nestjs/common';
import { MyPrismaController } from './my-prisma.controller';
import { MyPrismaService } from './my-prisma.service';
import { PrismaService } from '../prisma/prisma.service';
import { EmployeeService } from '../employee/employee.service';
import { DepartmentService } from '../department/department.service';

@Module({
  imports: [],
  controllers: [MyPrismaController],
  providers: [
    MyPrismaService,
    PrismaService,
    DepartmentService,
    EmployeeService,
  ],
})
export class MyPrismaModule {}
