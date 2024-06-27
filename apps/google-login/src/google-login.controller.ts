import { Controller, Get, Inject, Req, UseGuards } from '@nestjs/common';
import { GoogleLoginService, IGoogleInfo } from './google-login.service';
import { AuthGuard } from '@nestjs/passport';
import { PrismaService } from '../prisma/prisma.service';

@Controller()
export class GoogleLoginController {
  constructor(private readonly googleLoginService: GoogleLoginService) {}

  @Inject(PrismaService)
  private readonly prismaService: PrismaService;

  @Get()
  getHello(): string {
    return this.googleLoginService.getHello();
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('callback/google')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req) {
    const reqUser: IGoogleInfo = req.user;
    const user = await this.googleLoginService.findGoogleUserByEmail(
      reqUser.email,
    );
    console.log('user', user);
    if (!user) {
      return this.googleLoginService.registerByGoogleInfo(reqUser);
    } else {
      return user;
    }
  }
}
