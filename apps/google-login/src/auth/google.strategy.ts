import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from './constants';
import { SocksProxyAgent } from 'socks-proxy-agent';

const Agent = new SocksProxyAgent('socks5://127.0.0.1:7890');

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/callback/google',
      scope: ['email', 'profile'],
    });
    this._oauth2.setAgent(Agent);
  }

  validate(accessToken: string, refreshToken: string, profile: any) {
    const { name, emails, photos } = profile;
    return {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
    };
  }
}
