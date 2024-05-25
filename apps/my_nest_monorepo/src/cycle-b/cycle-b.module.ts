import { forwardRef, Module } from '@nestjs/common';
import { CycleAModule } from '../cycle-a/cycle-a.module';
import { CycleBService } from './cycle-b.service';

@Module({
  imports: [forwardRef(() => CycleAModule)],
  providers: [CycleBService],
  exports: [CycleBService],
})
export class CycleBModule {}
