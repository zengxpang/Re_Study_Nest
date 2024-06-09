import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class GithubLoginService {
  @Inject()
  private readonly prismaService: PrismaService;

  getHello(): string {
    return 'Hello World!';
  }

  registerUserByGithubInfo(githubInfo: Record<string, any>) {
    return this.prismaService.user.create({
      data: {
        username: githubInfo.username,
        githubId: githubInfo.id,
        email: githubInfo.emails[0].value,
        password: 'github',
      },
    });
  }

  findUserByGithubId(githubId: string) {
    return this.prismaService.user.findUnique({
      where: {
        githubId: githubId,
      },
    });
  }
}
