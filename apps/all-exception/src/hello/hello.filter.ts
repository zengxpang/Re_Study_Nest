import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HelloFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const http = host.switchToHttp();
    const response = http.getResponse<Response>();
    const status = exception.getStatus();

    const res = exception.getResponse() as { message: string[] };

    response.status(status).json({
      code: status,
      error: 'Bad Request',
      // post请求参数不对的时候，报错信息是数组。需要正确的返回该参数不对的信息
      message: res?.message?.join ? res.message.join(',') : res.message,
      xxx: 111,
    });
  }
}
