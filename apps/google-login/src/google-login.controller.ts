import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleLoginService } from './google-login.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class GoogleLoginController {
  constructor(private readonly googleLoginService: GoogleLoginService) {}

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
    console.log(req.user);
    return {
      statusCode: 200,
      data: req.user,
    };
  }
}
