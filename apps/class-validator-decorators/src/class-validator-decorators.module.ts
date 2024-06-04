import { Module } from '@nestjs/common';
import { ClassValidatorDecoratorsController } from './class-validator-decorators.controller';
import { ClassValidatorDecoratorsService } from './class-validator-decorators.service';
import { AModule } from './a/a.module';

@Module({
  imports: [AModule],
  controllers: [ClassValidatorDecoratorsController],
  providers: [ClassValidatorDecoratorsService],
})
export class ClassValidatorDecoratorsModule {}
