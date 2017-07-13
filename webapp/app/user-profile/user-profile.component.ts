import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { AppBarService } from '../app-bar/app-bar.service';
import { UserInfoService } from '../core/user-info.service';
import { SidenavService } from "../user-profile/user-profile.service";

@Component({
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [SidenavService]
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;
  user: {};
  username;
  aboutme;
  flag = 0;
  addInterestArr = [];
  profileArray = [];
  constructor(private fb: FormBuilder, private userservice: UserInfoService, private profileService: SidenavService) {
    this.createprofile();
  }

  createprofile() {
    this.profileForm = this.fb.group
      ({
        aboutMe: [''],
        location: [''],
        contact: ['',Validators.pattern('[0-9]{10}')],
        interestField: ['',Validators.required]
      });
  }
   addInterest(interest,resetText) {
   resetText.value='';
   if(!this.addInterestArr.includes(interest)) {
     this.addInterestArr.push(interest);
     console.log(this.addInterestArr);
   }
 } 
  // deselect chip value/remove tag value from an array
 deselectchip(interest) {
   const interestValue = interest;
   this.addInterestArr = this.addInterestArr.filter(item => item !== interestValue);
 }
  updateProfile(profileForm) {
     const profileData = this.profileForm.value;
     
     const contact = profileData.contact;
     const loc = profileData.location;
     const about = profileData.aboutMe;
     const interest = profileData.interest = this.addInterestArr;
     const newProfileDetails = { contact, loc, about, interest };
     this.profileService.updateUserProfile(newProfileDetails, this.username).subscribe (
       (data) => console.log('data patched'),
       error => console.log('try again later...!'),
       () => console.log('Updated Profile data',newProfileDetails)
     )
     console.log('my Profile form value',newProfileDetails);
  }

getUserProfile(email){
console.log("resultddddd",email)
  this.profileService.getUserProfile(email).subscribe(res=>
     { 
       const ss=this.profileArray = res;
       this.aboutme=ss.aboutMe;
       console.log(this.aboutme);
      console.log('my profile details',ss);
});
}
  ngOnInit() {
    this.userservice.getUserDetail((userdetails) => {
      this.user = userdetails;
      this.username = userdetails.username;
      console.log("USER DETAILS:", userdetails);
      console.log('username is : ' + this.username);
      this.flag = 1;
    });

  
    
  }
}
