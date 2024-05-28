import { Module } from '@nestjs/common';
import { MultipleVersionController } from './multiple-version.controller';
import { MultipleVersionService } from './multiple-version.service';
import { AModule } from './a/a.module';

@Module({
  imports: [AModule],
  controllers: [MultipleVersionController],
  providers: [MultipleVersionService],
})
export class MultipleVersionModule {}
