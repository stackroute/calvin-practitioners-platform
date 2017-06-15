import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(public authService: AuthService, public router: Router) { }
  login() {
    this.authService.login().subscribe((result) => {
      if (result) {
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/app/home';
        this.router.navigate([redirect]);
      }
    });
  };

  logout() {
    this.authService.logout();
  }
}
