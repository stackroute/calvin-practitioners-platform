import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
import { Params, RouterModule, Routes, Router } from '@angular/router';
import { GetCommunity } from '../manage-community/manage-community.service';

=======
import { Params, RouterModule, Router, Routes} from '@angular/router';
 import {GetCommunity} from '../manage-community/manage-community.service';
>>>>>>> ff95ee252485682f0b2eb7132660297fdbee7d31

@Component({
  selector: 'calvin-community-profile',
  templateUrl: './community-profile.component.html',
  styleUrls: ['./community-profile.component.css'],
  providers: [GetCommunity]
})
export class CommunityProfileComponent implements OnInit {
  samples = [];
  url: string;
  param = [];
<<<<<<< HEAD
  domain;
=======
  ans;
>>>>>>> ff95ee252485682f0b2eb7132660297fdbee7d31
  constructor(private router: Router, private comm: GetCommunity) {
    this.comm.getCommunity().subscribe(res => { this.samples = res; })
  }

<<<<<<< HEAD
  ngOnInit() {
    this.url = this.router.url;
    this.param = this.url.split('/');
    this.domain = this.param[this.param.length - 1];
=======
 ngOnInit() {
    this.url = this.router.url;
    this.param = this.url.split('/');
    this.ans = this.param[this.param.length - 1];
>>>>>>> ff95ee252485682f0b2eb7132660297fdbee7d31
  }
}

