import { Component, OnInit } from '@angular/core';
import { AuthService } from './../core/auth.service';
import { MdDialog } from '@angular/material';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {

  constructor(public dialog: MdDialog,public authService: AuthService, public router: Router) { }

  ngOnInit() { }
  openDialog() {
    alert('No new notification');
  }

  logout() {
    this.authService.logout();
  }
}
