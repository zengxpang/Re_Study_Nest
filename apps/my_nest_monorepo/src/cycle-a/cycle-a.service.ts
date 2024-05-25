import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CycleBService } from '../cycle-b/cycle-b.service';

@Injectable()
export class CycleAService {
  constructor(
    @Inject(forwardRef(() => CycleBService))
    private readonly cycleBService: CycleBService,
  ) {}

  extra() {
    return 'extra';
  }

  a() {
    return this.cycleBService.b() + 'a';
  }
}
