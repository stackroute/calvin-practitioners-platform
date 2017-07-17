import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl} from '@angular/forms';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Route, Router } from '@angular/router';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { TemplateBrowserComponent } from '../template-browser/template-browser.component';
import { NewcommunityDialogboxComponent } from '../newcommunity-dialogbox/newcommunity-dialogbox.component';
import { CreateCommunityService } from './create-community.service';
import { UserInfoService } from '../core/user-info.service';

@Component({
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css'],
  providers: [UserInfoService,CreateCommunityService],
})

export class CreateCommunityComponent implements OnInit {

  user;

  userForm: FormGroup;

  public tagarray = [];  // to insert chip value from textfield

  templateValue: string; // to store selected template value

  uniqueTemplate;

  uniquePurposeArry = [];

  isDomainExists = false;

  tagCtrl: FormControl;

  purposearray;

  purposelist;

  flag = 0;

  constructor(
  private fb: FormBuilder, 
  private newcommunity: CreateCommunityService, 
  public dialog: MdDialog, 
  private router: Router,
  private userservice:UserInfoService
  ) {
    this.createForm(); 
  }

  // reactive form validation for userForm
  createForm() {
    this.userForm = this.fb.group({
      domainName: ['', [Validators.required,Validators.pattern('[a-z0-9.]{4,30}')]],
      name: ['', Validators.required],
      purpose: ['', Validators.required],
      visibility: ['Public', Validators.required],
      description: [''],
      tagCtrl: ['', [Validators.required, Validators.pattern('[a-z]{3,20}')]],
      termscondition: ['', Validators.required],
      avatar: ['',Validators.pattern('https?://.+')],
    });
  }

  //to check Domain is available or not
  isDomainUnique(control: FormControl){
    this.flag = 1;
    console.log("Checking if domian ", control.value, " exists already");
    this.newcommunity.isDomainRegisterd(control.value).subscribe(
    (result) =>
    {
      if (Object.keys(result).length === 0) {
        console.log("result false",Object.keys(result).length);
        this.isDomainExists = false;
      } else {
        console.log("result true",Object.keys(result).length);
        this.isDomainExists = true;
      }
    });
  }

  // get the selected template value 
  onselect(selectedTemplate: any) {
    this.templateValue = selectedTemplate;
    return selectedTemplate;
  }

  // get unique template list based on purpose
  selectTemplate(purposevalue)
  {
    this.uniqueTemplate = this.newcommunity.communityDetails.filter(function(i) {
      return i.purpose === purposevalue;
    });
  }

  // store the tag value in array 
  chipValue(tag,resetText) {
    resetText.value='';
    if(!this.tagarray.includes(tag)) {
      this.tagarray.push(tag);
    }
  }

  // deselect chip value/remove tag value from an array
  deselectchip(tag) {
    const tagvalue = tag;
    this.tagarray = this.tagarray.filter(item => item !== tagvalue);
  }

  // submit userForm values and redirect to manageCommunity
  onsubmit(userdata: any) {
    const newCommunityObj = userdata.value;
    const template =  this.templateValue;
    const tags =  this.tagarray;
    const owner= this.user.username;
    // get formControlName value as seperate from fromGroup
    const purpose = newCommunityObj.purpose;
    const name = newCommunityObj.name;
    const termscondition = newCommunityObj.termscondition;
    const visibility = newCommunityObj.visibility;
    const description = newCommunityObj.description;
    const domainName = newCommunityObj.domainName;
    const avatar = newCommunityObj.avatar;
    const newcommunityDetails = { purpose, name, visibility, description, template, tags, owner, avatar  };
    console.log('data we are send ing is ',newcommunityDetails);
    this.newcommunity.postNewcommunityDetails(newcommunityDetails, domainName).subscribe(
    (data) => this.openDialog(newCommunityObj));
  }

  // open dialog box if form submitted successfuly
  openDialog(newCommunityObj) {
    let dialogRef = this.dialog.open(NewcommunityDialogboxComponent, {
      disableClose: true ,
      data:newCommunityObj
    });
  }

  // route to Home page if action cancelled
  routeToHome() {
    this.router.navigate(['/app/Home/']);
  }

  ngOnInit() {
    // this will get the data to list template
    this.newcommunity.getTemplates().subscribe(
    data => { this.newcommunity.communityDetails = data;
      console.log('JSON value', data);
      const purposeList = [new Set(data.map( item => item.purpose))];
      const myArray = Array.from(purposeList);
      this.uniquePurposeArry =  Array.from(myArray[0]);
    }, error => //console.log(error),
    () => console.log('finished')
    );
    // get the owner name
    this.userservice.getUserDetail((user)=>{
      this.user=user;
      //console.log('user is in comm',this.user);
    });
  }
}
