import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  constructor(private http: Http) { }
  login() {
    window.location.replace('http://localhost:3000/api/v1/login/auth/google');
  }
  logout() {

    // localStorage.removeItem('isLogginUser');
    // this.isLoggedIn = false;httphttphttphttp
    // alert('inside logout service');
    // return this.http.get('http://localhost:3000/api/v1/login/auth/logout').map((res: Response) => { res = res; });

    // alert('inside logout service');
    window.location.replace('http://localhost:3000/api/v1/logout');
    //  this.http.get('http://localhost:3000/api/v1/logout');

    }
  }
