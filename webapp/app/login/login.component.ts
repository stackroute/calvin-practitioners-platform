import { Component } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import { AuthService } from '../core/auth.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
selectedLanguage: string;

  languages = [
    {value: 'English', viewValue: 'English'},
    {value: 'Hindi', viewValue: 'Hindi'},
    {value: 'French', viewValue: 'French'}
  ];

  constructor( public authService: AuthService, public router: Router) { }
  login() {
    this.authService.login();
}
  logout() {
    this.authService.logout();
  }
}
