import { Module } from '@nestjs/common';
import { AllDecoratorController } from './all-decorator.controller';
import { AllDecoratorService } from './all-decorator.service';

@Module({
  imports: [],
  controllers: [AllDecoratorController],
  providers: [
    AllDecoratorService,
    // {
    //   provide: 'APP_NAME',
    //   useValue: 'All Decorator App',
    // },
  ],
})
export class AllDecoratorModule {}
