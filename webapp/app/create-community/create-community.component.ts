import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Route, Router } from '@angular/router';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { TemplateBrowserComponent } from '../template-browser/template-browser.component';
import { NewcommunityDialogboxComponent } from '../newcommunity-dialogbox/newcommunity-dialogbox.component';
import { CreateCommunityService } from './create-community.service';
import { AppBarService } from '../app-bar/app-bar.service';

@Component({
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css'],
  providers: [CreateCommunityService],
})

export class CreateCommunityComponent implements OnInit {

  user;
  uname;
  flag;
  newDomainName;

  userForm: FormGroup;

  public tagarray = [];  // to insert chip value from textfield

  value: string; // to store selected template value

  visibility = ['ide', 'forum', 'stackoverflow'];

  uniquePurposeArry = [];

  tagCtrl: FormControl;

  constructor(
  private fb: FormBuilder, 
  private newcommunity: CreateCommunityService, 
  public dialog: MdDialog, 
  private router: Router) {
    this.createForm();    
  }

  // reactive form validation for userForm
  createForm() {
    this.userForm = this.fb.group({
      domainName: ['', [Validators.required, Validators.pattern('[a-z0-9.]{4,20}')]],
      name: ['', Validators.required],
      purpose: ['', Validators.required],
      visibility: ['Public', Validators.required],
      description: [''],
      // template: ['md',Validators.required],
      tagCtrl: ['', Validators.required],
      termscondition: ['', Validators.required],
      avatar: ['']
    });
  }

  // get the selected template value 
  onselect(selectedTemplate: any) {
    this.value = selectedTemplate;
    return this.value;
  }

  // store the tag value in array 
  chipValue(tag) {
    this.tagarray.push(tag);
  }

  // deselect chip value/remove tag value from an array
  deselectchip(tag) {
    const tagvalue = tag;
    this.tagarray = this.tagarray.filter(item => item !== tagvalue);
  }

  // submit userForm values
  onsubmit(userdata: any) {
    const newCommunityObj = userdata.value;
    const purpose = newCommunityObj.purpose;
    const name = newCommunityObj.name;
    const termscondition = newCommunityObj.termscondition;
    const visibility = newCommunityObj.visibility;
    const description = newCommunityObj.description;
    const domainName = newCommunityObj.domainName;
    const template = newCommunityObj.template = this.value;
    const tags = newCommunityObj.tags = this.tagarray;
    const owner = newCommunityObj.owner = this.uname;
    const newcommunityDetails = { purpose, name, visibility, description, template, tags, owner  };
    this.newcommunity.postNewcommunityDetails(newcommunityDetails, domainName).subscribe(
    (data) => console.log('Postdata'),
    error =>     this.reset(),
    () => this.openDialog(newCommunityObj));
  }

  // reset the form value after form value post successfully/cancel
  reset() {
    this.createForm();
  }

  // open dialog box if form submitted successfuly
  openDialog(newCommunityObj) {
    let dialogRef = this.dialog.open(NewcommunityDialogboxComponent, {
      data:newCommunityObj
    });
  }

  ngOnInit() {
    // this will get the data to list template
    this.newcommunity.getTemplates()
    .subscribe(
    data => { this.newcommunity.communityDetails = data;
      console.log('JSON value', data);
      const purposeList = [new Set(data.map( item => item.purpose))];
      const myArray = Array.from(purposeList);
      this.uniquePurposeArry =  Array.from(myArray[0]);
    },
    error => console.log(error),
    () => console.log('finished')
    );

    // get the owner name
    this.newcommunity.getuserinfo()
    .subscribe(res => {
      this.user = res;
      this.uname= res.username;
      this.flag = 1;
      return this.uname;
    });
  }
}
