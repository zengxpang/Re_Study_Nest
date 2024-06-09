import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';

import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  @Inject(UserService)
  private userService: UserService;

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (!user) {
      throw new UnauthorizedException('用户不存在');
    }
    if (user.password !== password) {
      throw new UnauthorizedException('密码错误');
    }

    const { password: _, ...result } = user;
    return result;
  }
}
