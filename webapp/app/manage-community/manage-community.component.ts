import { Component, OnInit } from '@angular/core';
  import {FormControl} from '@angular/forms';
  import {MdDialog} from '@angular/material';
 import {NgForm} from '@angular/forms'

@Component({
  // selector: 'calvinManagecommunity',
  templateUrl: './manage-community.component.html',
  styleUrls: ['./manage-community.component.css']
})
export class ManageCommunityComponent implements OnInit {
  selectedValue: string;

  folders = [{
      name: 'Kavipriya',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Nikita',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Kiran',
      updated: new Date('1/28/16'),
    }];
     onFormSubmit(userForm: NgForm) {
    console.log(userForm.value);
    console.log('Community name:' + userForm.controls['Community name'].value);
     console.log('Description:' + userForm.controls['Description'].value);
      console.log('access:' + userForm.controls['access'].value);
      console.log('Tags:' + userForm.controls['Tags'].value);
    console.log('Form Valid:' + userForm.valid);
    console.log('Form Submitted:' + userForm.submitted);

  }

  constructor(public dialog: MdDialog) {}
    openDialog() {
    this.dialog.open(ManageCommunityComponent);
  }
   
ngOnInit() { }

}
