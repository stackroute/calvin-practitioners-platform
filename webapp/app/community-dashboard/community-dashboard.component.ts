import { Component, OnInit, Input } from '@angular/core';
import { CommunityToolsWidgetComponent } from '../community-tools-widget/community-tools-widget.component';
import { CommunityMembersWidgetComponent } from '../community-members-widget/community-members-widget.component';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { CommunityProfileService } from '../community-profile/community-profile.service';
import * as moment from 'moment/moment';



@Component({
  selector: 'calvin-community-dashboard',
  templateUrl: './community-dashboard.component.html',
  styleUrls: ['./community-dashboard.component.css'],
  providers: [CommunityProfileService],
})
export class CommunityDashboardComponent implements OnInit {

 
  
  url: string;
  param = [];
  community = {};
  counter = true;
  domain = "";

  constructor(private commProfileService: CommunityProfileService, private router: Router, private route: ActivatedRoute, ) {
  }
  ngOnInit() {
     
    this.domain = this.route.snapshot.params['domain'];
    this.commProfileService.getCommunity(this.domain).
      subscribe(res => {
          res.createdon= moment(res.createdon).subtract(1,'days').calendar();
        this.community = res;
      });
  }
}