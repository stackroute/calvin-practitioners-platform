import { Component } from '@angular/core';
import { LoginService } from './login-service.component';
import { Cookie } from 'ng2-cookies/ng2-cookies';
//   title = 'app';
//   language = [
//     { value: 'E0', viewValue: 'English' },
//     { value: 'E1', viewValue: 'Hindi' },
//     { value: 'E2', viewValue: 'Telugu' }
//   ];
//    message: string;
//   constructor(public authService: AuthService, public router: Router,private loginservice: LoginService) {
//    // this.setMessage();
//   }

  
//   setMessage() {
//     this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
//   }
//   login2() {
//     this.message = 'Trying to log in ...';
//     this.authService.login().subscribe(() => {
//       this.setMessage();
//       if (this.authService.isLoggedIn) {
//         // Get the redirect URL from our auth service
//         // If no redirect has been set, use the default
//         const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
//         // Set our navigation extras object
//         // that passes on our global query params and fragment
//         const navigationExtras: NavigationExtras = {
//           preserveQueryParams: true,
//           preserveFragment: true
//         };
//         // Redirect the user
//         this.router.navigate([redirect], navigationExtras);
//       }
//     });
//   }
//   logout() {
//     this.authService.logout();
//     this.setMessage();
//   }
// }
import { AuthService } from '../core/auth.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})

export class LoginComponent {

selectedLanguage: string;

  languages = [
    {value: 'English', viewValue: 'English'},
    {value: 'Hindi', viewValue: 'Hindi'},
    {value: 'French', viewValue: 'French'}
  ];

  constructor(public authService: AuthService, public router: Router,private logservice: LoginService) { }
  loginapp(){
     console.log('login clicked');
    //  this.logservice.loginapps();
      window.location.replace("http://localhost:3000/auth/google");
    
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
