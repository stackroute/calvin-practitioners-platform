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
 private userservices:AppBarService,
 private userservice: UserInfoService) {}

 ngOnInit() {

 



  this.userservices.getuserinfo()
   .subscribe(res => {
    console.log('3.hi',res);
    this.user = res;
    this.flag = 1;
   });
 
 }
 
 
//    this.userservice.getUserDetail((userdetails)=>{
     
//       this.user=userdetails;
//       console.log(typeof userdetails);
//        console.log('user is : '+this.user);
//       this.flag = 1;
// });
 
  //  (this.user=res));
  // console.log('rss',this.user);

 
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
