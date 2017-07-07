import { Component, OnInit } from '@angular/core';
import { AuthService } from './../core/auth.service';
import { MdDialog } from '@angular/material';
import { NavigationExtras, Router } from '@angular/router';
import { UserInfoService } from '../core/user-info.service';
import { AppBarService } from './app-bar.service';

@Component({
 templateUrl: './app-bar.component.html',
 styleUrls: ['./app-bar.component.css'],
 providers: [UserInfoService,AppBarService]
})
export class AppBarComponent implements OnInit {
 user: {};
 flag = 0;
 sidepic: string;
 constructor(
 public dialog: MdDialog, 
 public authService: AuthService, 
 public router: Router, 
 private userservice: UserInfoService) {}

 ngOnInit() {

 




 
   this.userservice.getUserDetail((userdetails)=>{
     

      this.user=userdetails;
      console.log('this.user',this.user);
       console.log(typeof userdetails);
       console.log('user is : '+this.user);
      this.flag = 1;
});

 }

 
 maximizepic(imgsrc) {

  const x = imgsrc.substring(0, (imgsrc.length - 2)) + '300';
//   console.log('renderd img', x);
  return x;

 }
 openDialog() {
  alert('No new notification');

 }

 logout() {
  // alert('logout clciked');
  this.authService.logout();
 }
}
