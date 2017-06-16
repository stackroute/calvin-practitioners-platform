import { Component, OnInit } from '@angular/core';
import { AuthService } from './../core/auth.service';

import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'calvin-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  logout() {
    console.log('logout clicked');
    this.authService.logout().subscribe(  data => {

      console.log('logout done');
      this.router.navigate(['/login']);
    });
    // this.router.navigate(['/login']);
  }

}
