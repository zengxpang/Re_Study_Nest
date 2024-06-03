import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';

import { EMedianController } from './e-median.controller';
import { EMedianService } from './e-median.service';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    ArticlesModule,
  ],
  controllers: [EMedianController],
  providers: [EMedianService],
})
export class EMedianModule {}
