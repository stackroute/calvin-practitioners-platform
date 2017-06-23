import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MdDialog} from '@angular/material';
import {NgForm} from '@angular/forms';
import {GetCommunity} from './manage-community.service';
import {Http,Response} from '@angular/http';
import { Router } from '@angular/router';
//  import {GetCommunity} from './manage-community.service';

@Component({
  selector: 'calvin-manage-community',
  templateUrl: './manage-community.component.html',
  styleUrls: ['./manage-community.component.css'],
  providers: [GetCommunity]
})
export class ManageCommunityComponent implements OnInit {
contents=[];
 selectedValue: string;
   public tagarray= [];

   constructor(private comm: GetCommunity) {
   
    }

   ngOnInit() {
   
    this.comm.getCommunity().subscribe(res =>{this.contents=res;});
   console.log(this.contents);
   }

  

      onFormSubmit(userForm: NgForm) {
      console.log(userForm.value);
      console.log('Community name:' + userForm.controls['Community name'].value);
      console.log('Description:' + userForm.controls['Description'].value);
      console.log('access:' + userForm.controls['access'].value);
      console.log('chip:' + userForm.controls['chip'].value);
      console.log('Form Valid:' + userForm.valid);
      console.log('Form Submitted:' + userForm.submitted);

  }

   chipValue(tag: any) {
   this.tagarray.push(tag);
  }

  // constructor(public dialog: MdDialog) {}
  //   openDialog() {
  //   this.dialog.open(ManageCommunityComponent);
  }

  
  // GetCommunity(){

  //   const url=`http://localhost:4200/`;
  //   return this.http.get(url).map(res => res.json());
  // }



