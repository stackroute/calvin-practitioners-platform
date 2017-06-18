import { Component, OnInit } from '@angular/core';
import { CommunityNavbarComponent } from '../community-navbar/community-navbar.component';
import { CommunitySidenavComponent } from '../community-sidenav/community-sidenav.component';

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
