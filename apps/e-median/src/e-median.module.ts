import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';

import { EMedianController } from './e-median.controller';
import { EMedianService } from './e-median.service';
import { ArticlesModule } from './articles/articles.module';
import { Lib1Module } from '@app/lib1';

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    ArticlesModule,
    Lib1Module,
  ],
  controllers: [EMedianController],
  providers: [EMedianService],
})
export class EMedianModule {}
