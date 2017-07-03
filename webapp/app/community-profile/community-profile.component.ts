import { Component, OnInit } from '@angular/core';
import { GetCommunity } from './community-profile.service';

import { Params, RouterModule, Routes, Router,ActivatedRoute } from '@angular/router';
// import { GetCommunity } from '../manage-community/manage-community.service';

@Component({
  selector: 'calvin-community-profile',
  templateUrl: './community-profile.component.html',
  styleUrls: ['./community-profile.component.css'],
  providers: [GetCommunity]
})

export class CommunityProfileComponent implements OnInit {
  // samples = [];
  url: string;
  param = [];
  contents=[];
  arr=[];
  domain;
  ans;
  constructor(private route: ActivatedRoute,private router: Router, private comm: GetCommunity) {
    // this.comm.getCommunity().subscribe(res => { this.samples = res; })
  }

  ngOnInit() {
    
    
     console.log("Current Domain is: ", this.route.snapshot.params['domain']);    
    this.comm.getCommunity(this.route.snapshot.params['domain']).subscribe(res =>{this.contents=res;
      // this.comm.getCommunity().subscribe(res =>{this.contents=res;
    
  });
}
}