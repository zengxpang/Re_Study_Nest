import { Controller, Get, UseGuards } from '@nestjs/common';
import { ContextService } from './context.service';
import { AException } from './AException';
import { AGuard } from './a/a.guard';
import { Role } from './role/role.decorator';
import { IRole } from './role';

@Controller()
export class ContextController {
  constructor(private readonly contextService: ContextService) {}

  @Get()
  // @UseFilters(AFilter)
  @UseGuards(AGuard)
  // 这里不是数组吗？
  @Role(IRole.ADMIN)
  getHello(): string {
    // throw new AException('a', 'b');
    return this.contextService.getHello();
  }
}
