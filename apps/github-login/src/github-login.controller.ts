import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { GithubLoginService } from './github-login.service';

@Controller()
export class GithubLoginController {
  constructor(private readonly githubLoginService: GithubLoginService) {}

  @Get()
  getHello(): string {
    return this.githubLoginService.getHello();
  }

  @Get('login')
  @UseGuards(AuthGuard('github'))
  async login(): Promise<string> {
    return 'success';
  }

  @Get('callback')
  @UseGuards(AuthGuard('github'))
  async callback(@Req() req): Promise<any> {
    console.log(req.user);
    return this.githubLoginService.findUserByGithubId(req.user.id);
  }
}
