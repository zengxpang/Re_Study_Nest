import { Controller, Get } from '@nestjs/common';
import { MultipleVersionService } from './multiple-version.service';

@Controller()
export class MultipleVersionController {
  constructor(private readonly multipleVersionService: MultipleVersionService) {}

  @Get()
  getHello(): string {
    return this.multipleVersionService.getHello();
  }
}
