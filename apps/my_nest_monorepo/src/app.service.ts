import { Injectable } from '@nestjs/common';
import { GlobalOtherService } from './global-other/global-other.service';

@Injectable()
export class AppService {
  constructor(private readonly globalOtherService: GlobalOtherService) {}

  getHello(): string {
    return this.globalOtherService.yyy() + 'my_nest_monorepo';
  }
}
