import { Component, OnInit } from '@angular/core';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { MdDialog } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
// import { GetCommunity } from './manage-community.service';
import { Http, Response } from '@angular/http';
// import { GetCommunity } from '../community-profile/community-profile.service';
// import { Router } from '@angular/router';
 import {GetCommunity} from './manage-community.service';

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
url: string;
param = [];
arr=[];
domain;
ans;
  
   constructor(private route: ActivatedRoute, private router: Router,private comm: GetCommunity) { }

 ngOnInit() {
   console.log("Current Domain is: ", this.route.snapshot.params['domain']);
   
   this. comm. getCommunity(this.route.snapshot.params['domain']). subscribe ( res => { this.contents = res; 
 
   
  } );
   
 }

 onSubmit(Form: any): void {  
    console.log('you submitted value:', Form);

 }

   chipValue(tag: any) {
   this.tagarray.push(tag);
  }
// clearTag(tag){

//   this.tagarray.pop(tag.value);
// }


  PatchCommunity(form,domain){
  
  // this.SaveCommunity.PatchCommunity(form,domain).subscribe(userForm=>{
    
  //   alert("postedCommunity");
  // });

} 
}
