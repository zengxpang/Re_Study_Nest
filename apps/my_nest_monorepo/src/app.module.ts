import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OtherModule } from './other/other.module';
import { GlobalOtherModule } from './global-other/global-other.module';
import { CycleAModule } from './cycle-a/cycle-a.module';
import { CycleBModule } from './cycle-b/cycle-b.module';
import { CycleAService } from './cycle-a/cycle-a.service';
import { CycleBService } from './cycle-b/cycle-b.service';

@Module({
  imports: [OtherModule, GlobalOtherModule, CycleAModule, CycleBModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
