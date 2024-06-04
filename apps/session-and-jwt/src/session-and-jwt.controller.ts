import {
  Controller,
  Get,
  Headers,
  Inject,
  Res,
  Session,
  UnauthorizedException,
} from '@nestjs/common';
import { SessionAndJwtService } from './session-and-jwt.service';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Controller()
export class SessionAndJwtController {
  constructor(private readonly sessionAndJwtService: SessionAndJwtService) {}

  @Inject(JwtService)
  private readonly jwtService: JwtService;

  @Get()
  getHello(): string {
    return this.sessionAndJwtService.getHello();
  }

  @Get('sss')
  sss(@Session() session: Record<string, any>) {
    console.log(session);
    session.views = session.views ? session.views + 1 : 1;
    return session.views;
  }

  @Get('ttt')
  ttt(
    @Headers('Authorization') Authorization: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    if (!Authorization) {
      const newToken = this.jwtService.sign({ views: 1 });
      response.setHeader('token', newToken);
      return 1;
    } else {
      try {
        console.log(Authorization);
        // Bearer ${token}
        const token = Authorization.split(' ')[1];
        const data = this.jwtService.verify(token);
        console.log(data);
        const newToken = this.jwtService.sign({ views: data.views + 1 });
        response.setHeader('token', newToken);
        return data.views + 1;
      } catch (e) {
        console.log(e);
        throw new UnauthorizedException();
      }
    }
  }
}
