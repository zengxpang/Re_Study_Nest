import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AGuard implements CanActivate {
  @Inject(Reflector)
  private readonly reflector: Reflector;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const classMetadata = this.reflector.get<string[]>(
      'roles',
      context.getClass(),
    );
    const methodMetadata = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    console.log('classMetadata', classMetadata);
    console.log('methodMetadata', methodMetadata);
    return true;
  }
}
