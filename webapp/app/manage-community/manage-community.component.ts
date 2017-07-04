import { Component, OnInit, Input } from '@angular/core';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { MdDialog } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import { Http, Response } from '@angular/http';

import { CommunityProfileService } from '../community-profile/community-profile.service';

import { CommunityProfileComponent } from '../community-profile/community-profile.component';


@Component({
  selector: 'calvin-manage-community',
  templateUrl: './manage-community.component.html',
  styleUrls: ['./manage-community.component.css'],
  providers: [CommunityProfileService]
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
 isCounter = true;

ans;
  
   constructor(private route: ActivatedRoute, private router: Router, private commProfileService: CommunityProfileService) { }

 ngOnInit() {
   console.log("Current Domain is: ", this.route.snapshot.params['domain']);
   
   this.commProfileService.getCommunity(this.route.snapshot.params['domain']). subscribe ( res => {  this.contents = res; 
    //  this.arr=this.contents[0].tags;
    console.log(this.contents);
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


  // PatchCommunity(form,domain){
  
  // this.SaveCommunity.PatchCommunity(form,domain).subscribe(userForm=>{
    
  //   alert("postedCommunity");
  // });

// } 
}
