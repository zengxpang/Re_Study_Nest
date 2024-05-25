import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OtherModule } from './other/other.module';
import { GlobalOtherModule } from './global-other/global-other.module';

@Module({
  imports: [OtherModule, GlobalOtherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
