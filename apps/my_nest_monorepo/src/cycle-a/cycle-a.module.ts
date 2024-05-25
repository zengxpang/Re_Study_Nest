import { forwardRef, Module } from '@nestjs/common';
import { CycleBModule } from '../cycle-b/cycle-b.module';
import { CycleAService } from './cycle-a.service';

@Module({
  imports: [forwardRef(() => CycleBModule)],
  providers: [CycleAService],
  exports: [CycleAService],
})
export class CycleAModule {}
