import { Component, OnInit } from '@angular/core';
  import {FormControl} from '@angular/forms';
  import {MdDialog} from '@angular/material';
 import {NgForm} from '@angular/forms';
 import {getCommunity} from './manage-community.service';

@Component({
  selector: 'calvin-manage-community',
  templateUrl: './manage-community.component.html',
  styleUrls: ['./manage-community.component.css'],
  providers: [getCommunity]
})
export class ManageCommunityComponent implements OnInit {
  selectedValue: string;
  public tagarray= [];


     onFormSubmit(userForm: NgForm) {
    console.log(userForm.value);
    console.log('Community name:' + userForm.controls['Community name'].value);
     console.log('Description:' + userForm.controls['Description'].value);
      console.log('access:' + userForm.controls['access'].value);
      console.log('chip:' + userForm.controls['chip'].value);
    console.log('Form Valid:' + userForm.valid);
    console.log('Form Submitted:' + userForm.submitted);

  }

  constructor(public dialog: MdDialog,private comm:getCommunity) {}
    openDialog() {
    this.dialog.open(ManageCommunityComponent);
  }
  chipValue(tag: any) {
   this.tagarray.push(tag);
   }
  ngOnInit() { }

};
