import { Controller, Get, Inject } from '@nestjs/common';
import { EMedianService } from './e-median.service';
import { Lib1Service } from '@app/lib1';

@Controller()
export class EMedianController {
  constructor(private readonly eMedianService: EMedianService) {}

  @Inject(Lib1Service)
  private readonly lib1Service: Lib1Service;

  @Get()
  getHello(): string {
    return this.eMedianService.getHello();
  }

  @Get('lib1')
  getLib1(): string {
    return this.lib1Service.publicMethod();
  }
}
