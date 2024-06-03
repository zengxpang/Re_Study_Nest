import { Controller, Get, Inject } from '@nestjs/common';
import { MyPrismaService } from './my-prisma.service';
import { DepartmentService } from '../department/department.service';
import { EmployeeService } from '../employee/employee.service';

@Controller()
export class MyPrismaController {
  @Inject(MyPrismaService)
  private myPrismaService: MyPrismaService;

  @Inject(DepartmentService)
  private departmentService: DepartmentService;

  @Inject(EmployeeService)
  private employeeService: EmployeeService;

  @Get()
  getHello(): string {
    return this.myPrismaService.getHello();
  }

  @Get('create')
  async create(): Promise<string> {
    const department = await this.departmentService.create({
      name: '技术部',
    });
    await this.employeeService.create({
      name: '张三',
      phone: '123456',
      department: {
        connect: {
          id: department.id,
        },
      },
    });
    return 'Created';
  }
}
