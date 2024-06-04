import { NestFactory } from '@nestjs/core';
import { SessionAndJwtModule } from './session-and-jwt.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(SessionAndJwtModule);

  app.use(
    session({
      secret: 'zengxpang',
      resave: false, // 内容更新会更新session
      saveUninitialized: false, // saveUninitialized 设置为 true 是不管是否设置 session，都会初始化一个空的 session 对象。比如你没有登录的时候，也会初始化一个 session 对象，这个设置为 false 就好
    }),
  );
  await app.listen(3000);
}
bootstrap();
