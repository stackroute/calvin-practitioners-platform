import {
 Component
}
from '@angular/core';
import {
 LoginService
}
from './login.service';
import {
 AuthService
}
from '../core/auth.service';

import {
 NavigationExtras,
 Router
}
from '@angular/router';

@Component({
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css'],
 providers: [LoginService]
})

export class LoginComponent {
 title = 'app';
 language = [{
  value: 'E0',
  viewValue: 'English'
 }, {
  value: 'E1',
  viewValue: 'Hindi'
 }, {
  value: 'E2',
  viewValue: 'Telugu'
 }];

 message: string;
 constructor(public authService: AuthService, public router: Router, private loginservice: LoginService) {

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
    if (result) {
     const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/app/home';
     // Redirect the user
     this.router.navigate([redirect]);

     this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
       // Get the redirect URL from our auth service
       // If no redirect has been set, use the default
       const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';

       // Set our navigation extras object
       // that passes on our global query params and fragment
       const navigationExtras: NavigationExtras = {
        preserveQueryParams: true,
        preserveFragment: true
       };

       // Redirect the user
       this.router.navigate([redirect], navigationExtras);

      }
     });
    }
   });
  };


  logout() {
   this.authService.logout();

  }

 }