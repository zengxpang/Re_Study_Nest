import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

import { MyPassPortController } from './my-pass-port.controller';
import { MyPassPortService } from './my-pass-port.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { jwtConstants } from './constants';
import { JwtAuthGuard } from './jwt-auth/jwt-auth.guard';

@Module({
  imports: [
    AuthModule,
    UserModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '1d',
      },
    }),
  ],
  controllers: [MyPassPortController],
  providers: [
    MyPassPortService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class MyPassPortModule {}
