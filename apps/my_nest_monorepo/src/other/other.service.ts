import { Inject, Injectable } from '@nestjs/common';
import { GlobalOtherService } from '../global-other/global-other.service';

@Injectable()
export class OtherService {
  @Inject(GlobalOtherService)
  private readonly globalOtherService: GlobalOtherService;

  xxx(): string {
    return this.globalOtherService.yyy() + 'xxx';
  }
}
