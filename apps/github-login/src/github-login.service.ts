import { Injectable } from '@nestjs/common';

const user = [
  {
    username: 'zengxpang',
    githubId: '88088364',
    email: 'zengxpang@163.com',
  },
];

@Injectable()
export class GithubLoginService {
  getHello(): string {
    return 'Hello World!';
  }

  findUserByGithubId(githubId: string) {
    return user.find((item) => item.githubId === githubId);
  }
}
