import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad,  Route, Router, RouterStateSnapshot } from '@angular/router';
import {Injectable} from '@angular/core';
import { AuthService } from './auth.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (Cookie.get('currentUser')) { return true; }
    this.authService.redirectUrl = url;
    const sessionId = 123456789;
    this.router.navigate(['/login']);
    return false;
  }



}
