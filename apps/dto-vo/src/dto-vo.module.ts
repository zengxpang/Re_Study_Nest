import { Module, ValidationPipe } from '@nestjs/common';
import { DtoVoController } from './dto-vo.controller';
import { DtoVoService } from './dto-vo.service';
import { AModule } from './a/a.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [AModule],
  controllers: [DtoVoController],
  providers: [
    DtoVoService,
    // {
    //   provide: APP_PIPE,
    //   useValue: ValidationPipe,
    // },
  ],
})
export class DtoVoModule {}
