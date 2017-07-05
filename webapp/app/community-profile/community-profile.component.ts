import { Component, OnInit, Input } from '@angular/core';

// import { Params, RouterModule, Routes, Router,ActivatedRoute } from '@angular/router';

// import { GetCommunity } from '../manage-community/manage-community.service';
// import { ManageCommunityComponent } from '../manage-community/manage-community.component';
// import { GetCommunity } from './community-profile.service';


@Component({
  selector: 'calvin-community-profile',
  templateUrl: './community-profile.component.html',
  styleUrls: ['./community-profile.component.css'],
  // providers: [GetCommunity],
})

export class CommunityProfileComponent implements OnInit {

 @Input() profile;
 
  // url: string;
  // param = [];
  // contents=[];
  // arr=[];
  // domain;
  // ans;
  // constructor(private route: ActivatedRoute,private router: Router) {
  constructor() {
    // this.comm.getCommunity().subscribe(res => { this.samples = res; })
  } 

  ngOnInit() {
    
    
  //    console.log("Current Domain is: ", this.route.snapshot.params['domain']);    
  //   this.comm.getCommunity(this.route.snapshot.params['domain']).subscribe(res =>{this.contents=res;
  //   //  this.arr = this.contents[0].tags;
  //    console.log(this.contents);
    
  //         // this.comm.getCommunity().subscribe(res =>{this.contents=res;
    
  // });
  }
}