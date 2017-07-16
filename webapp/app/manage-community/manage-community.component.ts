import { Component, OnInit, Input } from '@angular/core';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { MdDialog } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl} from '@angular/forms';
1
import * as moment from 'moment/moment';

import { Http, Response } from '@angular/http';

import { CommunityProfileService } from '../community-profile/community-profile.service';

import { updateSpecificCommunityService } from '../manage-community/manage-community.service';

@Component({
  selector: 'calvin-manage-community',
  templateUrl: './manage-community.component.html',
  styleUrls: ['./manage-community.component.css'],
  providers: [CommunityProfileService, updateSpecificCommunityService],
  
})
export class ManageCommunityComponent implements OnInit {


userForm: FormGroup;
community = [];
selectedValue: string;
public tagarray= [];
url: string;
param = [];
domain;
tagCtrl: FormControl
updatedBy;
status;
counter = true;
ans;
tagname:String;
  
   constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, 
   private commProfileService: CommunityProfileService,private dialog: MdDialog, private commUpdateService: updateSpecificCommunityService) { 
     this.updateForm(); 
   }


  // reactive form validation for userForm
  updateForm() {
    this.userForm = this.fb.group({
    avatar: ['',Validators.pattern('https?://.+')],
    visibility: ['',Validators.required],
    description: ['',Validators.required],
    tagCtrl :['',Validators.required],
    name:['']
    });
  }
   // store the tag value in array 
  chipValue(tag,resetText) {
    resetText.value='';
    if(!this.tagarray.includes(tag)) {
      this.tagarray.push(tag);
      console.log(this.tagarray);
    }
  }

  // deselect chip value/remove tag value from an array
  clearTag(tag) {
    const tagvalue = tag;
    this.tagarray = this.tagarray.filter(item => item !== tagvalue);
    console.log('deselect tag',this.tagarray);
  }
  openDialog() {
    this.dialog.open(updateCommunity);
  }


 onsubmit(userForm: any) { 
   const myFormValue = userForm.value; 
    const updatedby = myFormValue.updatedby = this.updatedBy;
    const tags = myFormValue.tags = this.tagarray;
    const name = myFormValue.name; 
    const visibility = myFormValue.visibility; 
    const description = myFormValue.description;
    const avatar = myFormValue.avatar;
    const status = myFormValue.status = this.status;

    console.log('tag array',tags);
    console.log('my form value', updatedby, tags, name, visibility, description, avatar, status);
    const formValue = { updatedby, tags, name, visibility, description, avatar, status};
    console.log('total form value',formValue);
    this.commUpdateService.updateSpecificCommunity(formValue,this.domain).subscribe((result)=>{
            this.openDialog();
    });
        
}
 
 


 ngOnInit() {
   
   this.domain = this.route.snapshot.params['domain'];
   this.commProfileService.getCommunity(this.route.snapshot.params['domain']). subscribe ( res => {   
   this.domain = res.domain;
   this.updatedBy = res.updatedby;
   this.status = res.status;
   res.createdon= moment(res.createdon).subtract(1,'days').calendar();
   this.community = res;
   console.log("inside managecommunity",this.community);

 
  
  //  this.tagarray.push(res.tags);
  } );

}
}

@Component({
  selector: 'updateCommunity',
  templateUrl: 'updateCommunity.html',
})
export class updateCommunity {

  constructor(private router: Router) { }
 
}
