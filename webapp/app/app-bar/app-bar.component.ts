import { Component, OnInit } from '@angular/core';
import { AuthService } from './../core/auth.service';

import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'calvin-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {

  constructor(public authService:AuthService, public router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
