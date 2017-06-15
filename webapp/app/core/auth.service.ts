import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return Observable.of(true).do(val =>
    { this.isLoggedIn = true; localStorage.setItem("isLogginUser", "true"); });

  }

  logout(): void {
    localStorage.removeItem("isLogginUser");
    this.isLoggedIn = false;
  }
}
