import { Component, OnInit, Input } from '@angular/core';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { MdDialog } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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
  public tagarray = [];
  url: string;
  param = [];
  domain;
  // myAvatar;
  updatedBy;
  status;
  counter = true;
  ans;
  tagname: String;

  constructor(private route: ActivatedRoute, private router: Router,
    private commProfileService: CommunityProfileService, private dialog: MdDialog, private commUpdateService: updateSpecificCommunityService) { }

  chipValue(tag) {

    //  alert("getting called chip");
    this.tagarray.push(tag);
    //  this.tagname = '';



  }
  // deselect chip value/remove tag value from an array
  clearTag(tag) {
    const tagvalue = tag;
    this.tagarray = this.tagarray.filter(item => item !== tagvalue);

  }
  openDialog() {
    this.dialog.open(updateCommunity);
  }


  onSubmit(Form: any, ): void {
    //  if (this.status == 'active') {
    //    this.status = 'enable';
    //    console.log('testing----------',this.status);
    //     return this.status;
    //  } else {
    //         this.status = 'disable';
    //    console.log('testing----------',this.status);

    //          return this.status;
    //         }
    Form.updatedby = this.updatedBy;
    Form.tags = this.tagarray;


    this.commUpdateService.updateSpecificCommunity(Form, this.domain).subscribe(
      (data) => console.log('posted data', Form, this.domain),
      () => console.log('finished'))
    this.openDialog();
  }




  ngOnInit() {

    this.domain = this.route.snapshot.params['domain'];
    this.commProfileService.getCommunity(this.route.snapshot.params['domain']).subscribe(res => {
      this.domain = res.domain;
      this.updatedBy = res.updatedby;
      res.createdon = moment(res.createdon).subtract(1, 'days').calendar();
      this.community = res;
      console.log("inside managecommunity", this.community);



      //  this.tagarray.push(res.tags);
    });

  }
}

@Component({
  selector: 'updateCommunity',
  templateUrl: 'updateCommunity.html',
})
export class updateCommunity {

  constructor(private router: Router) { }

}

