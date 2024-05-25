import { Global, Module } from '@nestjs/common';
import { GlobalOtherService } from './global-other.service';
import { GlobalOtherController } from './global-other.controller';

@Global()
@Module({
  providers: [GlobalOtherService],
  exports: [GlobalOtherService],
  controllers: [GlobalOtherController],
})
export class GlobalOtherModule {}
