import { Controller, Get } from '@nestjs/common';
import { ClassValidatorDecoratorsService } from './class-validator-decorators.service';

@Controller()
export class ClassValidatorDecoratorsController {
  constructor(private readonly classValidatorDecoratorsService: ClassValidatorDecoratorsService) {}

  @Get()
  getHello(): string {
    return this.classValidatorDecoratorsService.getHello();
  }
}
