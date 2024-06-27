import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface IGoogleInfo {
  email: string;
  firstName: string;
  lastName: string;
  picture: string;
}

@Injectable()
export class GoogleLoginService {
  @Inject(PrismaService)
  private readonly prismaService: PrismaService;

  getHello(): string {
    return 'Hello World!';
  }

  async registerByGoogleInfo(info: IGoogleInfo) {
    const { email, firstName, lastName, picture } = info;
    return this.prismaService.user.create({
      data: {
        nickName: `${firstName}_${lastName}`,
        avatar: picture,
        email,
        password: '',
        registerType: 'google',
      },
    });
  }

  async findGoogleUserByEmail(email: string) {
    console.log('email', email);
    return this.prismaService.user.findUnique({
      where: {
        registerType: 'google',
        email,
      },
    });
  }
}
