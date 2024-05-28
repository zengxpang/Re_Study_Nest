import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { WhatMiddlewareController } from './what-middleware.controller';
import { WhatMiddlewareService } from './what-middleware.service';
import { AMiddleware } from './a/a.middleware';

@Module({
  imports: [],
  controllers: [WhatMiddlewareController],
  providers: [WhatMiddlewareService],
})
export class WhatMiddlewareModule implements NestModule {
  // 中间件用于所有路由
  // consumer.apply(AMiddleware).forRoutes('*');
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AMiddleware).forRoutes({
      path: 'hello',
      method: RequestMethod.GET,
    });
    consumer.apply(AMiddleware).forRoutes({
      path: 'world*',
      method: RequestMethod.GET,
    });
  }
}
