import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const path = req.path
    if (path === '/admin/login' || path === '/admin/login/cookie') {
      return true
    }
    return !!req.signedCookies.username;
  }
}
