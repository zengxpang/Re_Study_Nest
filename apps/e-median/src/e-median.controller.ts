import { Controller, Get } from '@nestjs/common';
import { EMedianService } from './e-median.service';

@Controller()
export class EMedianController {
  constructor(private readonly eMedianService: EMedianService) {}

  @Get()
  getHello(): string {
    return this.eMedianService.getHello();
  }
}
