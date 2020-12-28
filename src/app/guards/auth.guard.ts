import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthUserService } from '../services/auth-user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private CookieService: CookieService, private Router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    return this.CookieService.check('access_token')
      ? true
      : this.Router.parseUrl('/authentication');
  }
}
