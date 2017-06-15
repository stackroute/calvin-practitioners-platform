import { Component } from '@angular/core';
import { LoginService } from './login.service';
import {AuthService} from '../core/auth.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {
  title = 'app';
  language = [
    { value: 'E0', viewValue: 'English' },
    { value: 'E1', viewValue: 'Hindi' },
    { value: 'E2', viewValue: 'Telugu' }
  ];

   message: string;

  constructor(public authService: AuthService, public router: Router,private loginservice: LoginService) {
    this.setMessage();
  }


  login() {
    alert('login clicked');
    this.loginservice.loginapp().subscribe(data => {
      console.log("login doine");
    });
  }
 

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login2() {
    this.message = 'Trying to log in ...';
    this.authService.login().subscribe((result) => {
      this.setMessage();
      if (result) {
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/app/home';
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
