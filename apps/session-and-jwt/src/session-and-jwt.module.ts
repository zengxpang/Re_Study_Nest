import { Module } from '@nestjs/common';
import { SessionAndJwtController } from './session-and-jwt.controller';
import { SessionAndJwtService } from './session-and-jwt.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    // JwtModule.register({
    //   secret: 'zengxpang',
    //   signOptions: {
    //     expiresIn: '1h',
    //   },
    // }),
    JwtModule.registerAsync({
      useFactory: async () => {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(1);
          }, 1000);
        });
        return {
          secret: 'zengxpang',
          signOptions: {
            expiresIn: '1h',
          },
        };
      },
    }),
  ],
  controllers: [SessionAndJwtController],
  providers: [SessionAndJwtService],
})
export class SessionAndJwtModule {}
