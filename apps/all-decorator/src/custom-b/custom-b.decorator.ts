import {
  SetMetadata,
  applyDecorators,
  Get,
  UseGuards,
  createParamDecorator,
  ExecutionContext,
  Controller,
} from '@nestjs/common';
import { CustomA } from '../custom-a/custom-a.decorator';
import { AGuard } from '../a/a.guard';
import { Request, Response } from 'express';

// 合并多个装饰器
export const CustomB = (path: string, role: string) => {
  return applyDecorators(Get(path), CustomA(role), UseGuards(AGuard));
};

// 自定义参数装饰器
export const CustomC = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    console.log(data, ctx);
    return 'xxx';
  },
);

export const MyHeaders = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();
    return data ? request.headers[data.toLowerCase()] : request.headers;
  },
);

export const MyQuery = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();
    return data ? request.query[data] : request.query;
  },
);

export const CustomD = () => Controller('custom-d');
