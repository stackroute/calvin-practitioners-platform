import { Component, OnInit } from '@angular/core';
import { AuthService } from './../core/auth.service';
import { MdDialog } from '@angular/material';
import { NavigationExtras, Router } from '@angular/router';
import { AppBarService } from './app-bar.service';

@Component({
 templateUrl: './app-bar.component.html',
 styleUrls: ['./app-bar.component.css'],
 providers: [AppBarService]
})
export class AppBarComponent implements OnInit {
 user: {};
 flag = 0;
 sidepic: string;
 constructor(public dialog: MdDialog, public authService: AuthService, public router: Router, private value: AppBarService) {}

 ngOnInit() {

  //  this.value.getuserinfo().subscribe((res)=> {

  //        console.log('res',res);
  //        this.user=res;
  //  });
  console.log('1.hi');
  this.value.getuserinfo()
   .subscribe(res => {
    console.log('3.hi');
    this.user = res;
    console.log('4.hi', this.user);
    this.flag = 1;
   });
  // this.value.getuserinfo().subscribe((res) =>


  //  (this.user=res));
  // console.log('rss',this.user);

 }
 maximizepic(imgsrc) {

  const x = imgsrc.substring(0, (imgsrc.length - 2)) + '300';
  console.log('renderd img', x);
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
