import { Module } from '@nestjs/common';
import { GoogleLoginController } from './google-login.controller';
import { GoogleLoginService } from './google-login.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [AuthModule],
  controllers: [GoogleLoginController],
  providers: [GoogleLoginService, PrismaService],
})
export class GoogleLoginModule {}
