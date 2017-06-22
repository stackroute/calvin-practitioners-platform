import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { AppBarService } from '../app-bar/app-bar.service';
@Component({
 templateUrl: './user-profile.component.html',
 styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 profileForm: FormGroup;
 user: {};
 flag = 0;
 constructor(private fb: FormBuilder, private value: AppBarService) {
  this.createprofile();
 }

 createprofile() {
  this.profileForm = this.fb.group({
   firstname: ['', [Validators.required, Validators.pattern('[a-z.]')]],
   email: ['', Validators.required],
   phonenumber: ['', Validators.required,
    Validators.minLength(10)
   ]
  });
 }
 //  onsubmit(userdata: any) {
 //     const values = userdata.value;
 //     const firstname = values.firstname;
 //     const email = values.email;
 //     const phonenumber = values.phonenumber;
 //     const location = values.location;
 //     const interest = values.interest;


 //           const value = { firstname,email,phonenumber,location,interest };
 //           console.log(value);

 // }
 ngOnInit() {
  // console.log('1.hi');
  this.value.getuserinfo()
   .subscribe(res => {
    // console.log('3.hi');
    this.user = res;
    // console.log('4.hi', this.user);
    this.flag = 1;
   });


 }
}
