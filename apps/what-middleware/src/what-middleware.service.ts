import { Injectable } from '@nestjs/common';

@Injectable()
export class WhatMiddlewareService {
  getHello(): string {
    return 'Hello World!';
  }
}
