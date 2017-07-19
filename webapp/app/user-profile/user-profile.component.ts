import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { AppBarService } from '../app-bar/app-bar.service';
import { MD_DIALOG_DATA } from '@angular/material';
import { UserInfoService } from '../core/user-info.service';
import { SidenavService } from "../user-profile/user-profile.service";
import { Route, Router } from '@angular/router';
import { ToolIntegrationService } from "../user-profile/tool-integration.service";

@Component({
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [SidenavService, ToolIntegrationService]
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;
  user: {};
  username;
  aboutme;
  flag = 0;
  addInterestArr = [];
  profileArray = [];

  constructor(private fb: FormBuilder, private userservice: UserInfoService,
   private profileService: SidenavService, public dialog: MdDialog,private toolInfoService: ToolIntegrationService  ) {
    this.createprofile();
  }
  openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog,{
    disableClose:true});
  
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
  createprofile() {
    this.profileForm = this.fb.group
      ({
        aboutMe: [''],
        location: ['',Validators.pattern('[A-Za-z]{3,20}')],
        contact: ['', Validators.pattern('[0-9]{10}')],
        interestField: ['', Validators.required]
      });
  }
  addInterest(interest, resetText) {
    resetText.value = '';
    if (!this.addInterestArr.includes(interest)) {
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
    this.profileService.updateUserProfile(newProfileDetails, this.username).subscribe(
      (data) => console.log('data patched'),
      error => console.log('try again later...!'),
      () => console.log('Updated Profile data', newProfileDetails)
    )
  }

  ngOnInit() {
    this.userservice.getUserDetail((userdetails) => {
      this.user = userdetails;
      this.username = userdetails.username;
      this.flag = 1;
    });
    this.profileService.getUserProfile(this.username).subscribe(res => {
      this.profileArray = res;
    });
  }
  maximizepic(imgsrc) {

    const x = imgsrc.substring(0, (imgsrc.length - 2)) + '300';
    return x;
  }

  integrateTool(toolName){
    this.toolInfoService.getTool(toolName)
    /*.subscribe(
    data => { this.toolInfoService.toolInfo = data;
    }, error => //console.log(error),
    () => console.log('finished')
    );*/
  }
}
@Component({
  selector: 'user-profile-dialog',
  templateUrl: 'user-profile-dialog.html',
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>, private router: Router) { }
  routeToProfile() {
     this.router.navigate(['/app/Home/']);
  }
}
