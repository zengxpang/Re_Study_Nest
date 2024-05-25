import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CycleAService } from '../cycle-a/cycle-a.service';

@Injectable()
export class CycleBService {
  constructor(
    @Inject(forwardRef(() => CycleAService))
    private readonly cycleAService: CycleAService,
  ) {}

  b() {
    // return this.cycleAService.a() + 'b'; 如果这样使用会内存溢出
    return this.cycleAService.extra() + 'b';
  }
}
