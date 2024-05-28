import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { WhatMiddlewareService } from '../what-middleware.service';

@Injectable()
export class AMiddleware implements NestMiddleware {
  @Inject(WhatMiddlewareService)
  private readonly whatMiddlewareService: WhatMiddlewareService;

  use(req: Request, res: Response, next: () => void) {
    console.log('before A middleware');
    console.log('in A middleware ----' + this.whatMiddlewareService.getHello());
    next();
    console.log('after A middleware');
  }
}
