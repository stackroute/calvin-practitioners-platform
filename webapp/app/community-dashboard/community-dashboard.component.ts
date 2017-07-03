import { Component, OnInit } from '@angular/core';
import { CommunityToolsWidgetComponent } from '../community-tools-widget/community-tools-widget.component';
import { CommunityMembersWidgetComponent } from '../community-members-widget/community-members-widget.component';
import { Params, RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'calvin-community-dashboard',
  templateUrl: './community-dashboard.component.html',
  styleUrls: ['./community-dashboard.component.css']
})
export class CommunityDashboardComponent implements OnInit {
  url: string;
  param = [];
  ans;
  constructor(private router: Router) {
  }
  ngOnInit() {
    // console.log("Domain is : ", this.router.snapshot.params.domain)
    this.url = this.router.url;
    this.param = this.url.split('/');
    this.ans = this.param[this.param.length - 1];
  }
}

