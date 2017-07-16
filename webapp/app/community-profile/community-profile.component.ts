import { Component, OnInit, Input, Output } from '@angular/core';
import * as moment from 'moment/moment';
import { UserInfoService } from '../core/user-info.service';
import { ManageCommunityComponent } from '../manage-community/manage-community.component'

@Component({
  selector: 'calvin-community-profile',
  templateUrl: './community-profile.component.html',
  styleUrls: ['./community-profile.component.css'],
  providers: [ UserInfoService],
})

export class CommunityProfileComponent implements OnInit {

 @Input() profile;
  communities = [];
  member;
  user;
  CommunitiesInfo = [];
 
 counter = true;

  constructor( private userInfo: UserInfoService,) {
    
  } 

  ngOnInit() {

    this.userInfo.getUserDetail((userdetails) => {

      this.member = userdetails.username;
      console.log(userdetails);
      console.log(typeof userdetails);
      console.log('user is : ' + this.member);
    });

     this.userInfo.getUserCommunity((userCommunity) => {
       this.CommunitiesInfo = userCommunity;
       console.log("getting user communitiesss in community profile,,",this.CommunitiesInfo);

      

     });
    


  }
}