import { Component, OnInit, Input, Output } from '@angular/core';
import { CommunityToolsWidgetComponent } from '../community-tools-widget/community-tools-widget.component';
import { CommunityMembersWidgetComponent } from '../community-members-widget/community-members-widget.component';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { CommunityProfileService } from '../community-profile/community-profile.service';
import { ActivityPageComponent } from '../activity-page/activity-page.component';
import * as moment from 'moment/moment';
import { UserInfoService } from '../core/user-info.service';
import { UserCommunities } from '../my-communities/my-communities.services';



@Component({
  selector: 'calvin-community-dashboard',
  templateUrl: './community-dashboard.component.html',
  styleUrls: ['./community-dashboard.component.css'],
  providers: [CommunityProfileService,UserInfoService,UserCommunities],
})
export class CommunityDashboardComponent implements OnInit {

 
  
  url: string;
  param = [];
  community = {};
  counter = true;
  domain = "";
  communities = [];
  member;
  user;
  CommunitiesInfo = [];

  constructor(private commProfileService: CommunityProfileService, private router: Router, private route: ActivatedRoute,private userInfo: UserInfoService ,private userCommunities: UserCommunities) {
  }
  ngOnInit() {
    this.domain = this.route.snapshot.params['domain'];
    this.commProfileService.getCommunity(this.domain,this.counter).
      subscribe(res => {
          res.createdon= moment(res.createdon).subtract(1,'days').calendar();
        this.community = res;
      });
          this.userInfo.getUserDetail((userdetails) => {

      this.member = userdetails.username;
      // console.log(userdetails);
      // console.log(typeof userdetails);
      // console.log('user is : ' + this.member);
    });

    this.userCommunities.getCommunity(this.member).subscribe(res => {
    this.communities = res.communities;
      console.log("checkinggggg", this.communities);
    });

    
  }
}