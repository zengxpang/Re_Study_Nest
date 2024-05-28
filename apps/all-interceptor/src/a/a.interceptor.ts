import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
  RequestTimeoutException,
} from '@nestjs/common';
import {
  catchError,
  map,
  Observable,
  tap,
  throwError,
  timeout,
  TimeoutError,
} from 'rxjs';

@Injectable()
export class AInterceptor implements NestInterceptor {
  logger = new Logger(AInterceptor.name);
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // 计算接口耗时
    // const now = Date.now();
    // return next
    //   .handle()
    //   .pipe(tap(() => console.log('after' + (Date.now() - now))));

    // 统一返回格式
    // map：对响应数据做修改，一般都是改成 {code, data, message} 的格式
    // return next.handle().pipe(
    //   map((data) => {
    //     return {
    //       code: 200,
    //       message: 'success',
    //       data,
    //     };
    //   }),
    // );

    // 打印日志或者缓存 tap不修改响应数据，执行一些额外逻辑，比如记录日志、更新缓存等
    // return next.handle().pipe(
    //   tap((data) => {
    //     this.logger.log('log something', data);
    //   }),
    // );

    // catchError : 在 exception filter 之前处理抛出的异常，可以记录或者抛出别的异常
    // return next.handle().pipe(
    //   catchError((error) => {
    //     this.logger.error(error.message, error.stack);
    //     return throwError(() => error);
    //   }),
    // );

    // 接口超时
    // timeout：处理响应超时的情况，抛出一个 TimeoutError，配合 catchError 可以返回超时的响应
    return next.handle().pipe(
      timeout(3000),
      catchError((error) => {
        if (error instanceof TimeoutError) {
          console.log('111');
          return throwError(() => new RequestTimeoutException());
        }
        return throwError(() => error);
      }),
    );
  }
}
