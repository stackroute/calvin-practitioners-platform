import { Component, OnInit } from '@angular/core';
import { CommunityToolsWidgetComponent } from '../community-tools-widget/community-tools-widget.component';
import { CommunityMembersWidgetComponent } from '../community-members-widget/community-members-widget.component';

@Component({
  selector: 'calvin-community-dashboard',
  templateUrl: './community-dashboard.component.html',
  styleUrls: ['./community-dashboard.component.css']
})
export class CommunityDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
