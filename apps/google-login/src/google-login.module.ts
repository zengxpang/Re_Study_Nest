import { Module } from '@nestjs/common';
import { GoogleLoginController } from './google-login.controller';
import { GoogleLoginService } from './google-login.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [GoogleLoginController],
  providers: [GoogleLoginService],
})
export class GoogleLoginModule {}
