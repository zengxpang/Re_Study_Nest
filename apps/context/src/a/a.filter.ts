import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { AException } from '../AException';
import { Request, Response } from 'express';

@Catch(AException)
export class AFilter implements ExceptionFilter {
  catch(exception: AException, host: ArgumentsHost) {
    console.log(exception, host);
    const type = host.getType();
    switch (type) {
      case 'http':
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        response.status(500).json({
          a: exception.a,
          b: exception.b,
        });
        break;
      case 'ws':
        break;
      case 'rpc':
        break;
    }
  }
}
