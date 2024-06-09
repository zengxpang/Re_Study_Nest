import { Module } from '@nestjs/common';
import { GithubLoginController } from './github-login.controller';
import { GithubLoginService } from './github-login.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [AuthModule],
  controllers: [GithubLoginController],
  providers: [GithubLoginService, PrismaService],
})
export class GithubLoginModule {}
