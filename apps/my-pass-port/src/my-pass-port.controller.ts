import { Controller, Get, Post, UseGuards, Inject, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

import { IsPublic } from './is-public/is-public.decorator';
import { MyPassPortService } from './my-pass-port.service';
import { LocalAuthGuard } from './local-auth/local-auth.guard';

interface IJwtUser {
  username: string;
  userId: string;
}

declare module 'express' {
  interface Request {
    user: IJwtUser;
  }
}

@Controller()
export class MyPassPortController {
  constructor(private readonly myPassPortService: MyPassPortService) {}

  @Inject(JwtService)
  private readonly jwtService: JwtService;

  @Get()
  getHello(): string {
    return this.myPassPortService.getHello();
  }

  @IsPublic()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request) {
    console.log('req.user', req.user);
    const payload = { username: req.user.username, userId: req.user.userId };
    const token = this.jwtService.sign(payload);
    return {
      token,
    };
  }

  @IsPublic()
  @Get('aaa')
  aaa() {
    return 'aaa';
  }

  @Get('bbb')
  bbb() {
    return 'bbb';
  }
}
