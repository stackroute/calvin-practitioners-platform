import { Component, OnInit } from '@angular/core';

import { MdDialog } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { GetCommunity } from './manage-community.service';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
//  import {GetCommunity} from './manage-community.service';

@Component({
  selector: 'calvin-manage-community',
  templateUrl: './manage-community.component.html',
  styleUrls: ['./manage-community.component.css'],
  providers: [GetCommunity]
})
export class ManageCommunityComponent implements OnInit {
    userForm: FormGroup;

contents = [];
 selectedValue: string;
   public tagarray= [];
  
   constructor(private comm: GetCommunity) { }

 ngOnInit() {
   this. comm. getCommunity(). subscribe ( res => { this.contents = res; } );
   
 }

 onSubmit(form: any): void {  
    console.log('you submitted value:', form);  
 }

   chipValue(tag: any) {
   this.tagarray.push(tag);
  }
// clearTag(tag){

//   this.tagarray.pop(tag.value);
// }


  // postCommunity(userForm,domain){
  
  // this.comm.postCommunity(userForm).subscribe(userForm=>{
    
  //   alert("postedCommunity");
  // });

} 
