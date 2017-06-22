import { Component, OnInit } from '@angular/core';
import { Params, RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'calvin-community-profile',
  templateUrl: './community-profile.component.html',
  styleUrls: ['./community-profile.component.css']
})
export class CommunityProfileComponent implements OnInit {

  url: string;
  param = [];
  ans;
  constructor(private router: Router) {
  }
  ngOnInit() {
    this.url = this.router.url;
    this.param = this.url.split('/');
    this.ans = this.param[this.param.length - 1];
  }

}
