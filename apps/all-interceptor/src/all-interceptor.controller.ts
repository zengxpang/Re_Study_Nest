import { Controller, Get } from '@nestjs/common';
import { AllInterceptorService } from './all-interceptor.service';

@Controller()
export class AllInterceptorController {
  constructor(private readonly allInterceptorService: AllInterceptorService) {}

  @Get()
  async getHello() {
    // throw new Error('xxx');
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return this.allInterceptorService.getHello();
  }
}
