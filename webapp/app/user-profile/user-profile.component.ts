import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { AppBarService } from '../app-bar/app-bar.service';
import { UserInfoService } from '../core/user-info.service';

@Component({
 templateUrl: './user-profile.component.html',
 styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 profileForm: FormGroup;
 user: {};
 flag = 0;
 constructor(private fb: FormBuilder, private userservice: UserInfoService) {
  this.createprofile();
 }

 createprofile() {
  this.profileForm = this.fb.group({
   firstname: ['', [Validators.required, Validators.pattern('[a-z]')]],
   email: ['', [Validators.required,Validators.pattern('[^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$]')]],
   phonenumber: ['', [Validators.required,Validators.minLength(10)]],
    location: [''],
    favourite: ['']
  });
 }
  onsubmit(userdata: any) {
     const values = userdata.value;
     const firstname = values.firstname;
     const email = values.email;
     const phonenumber = values.phonenumber;
     const location = values.location;
     const interest = values.interest;


           const value = { firstname,email,phonenumber,location,interest };
           console.log(value);

 }
 reset(){
   this.createprofile();
 }
 ngOnInit() {
 
    this.userservice.getUserDetail((userdetails)=>{
     
      this.user=userdetails;
      console.log(userdetails);
       console.log('user is : '+this.user);
      this.flag = 1;

 });
}
}
