import { Component, OnInit } from '@angular/core';
 import {GetCommunity} from '../manage-community/manage-community.service';

@Component({
  selector: 'calvin-community-profile',
  templateUrl: './community-profile.component.html',
  styleUrls: ['./community-profile.component.css'],
   providers: [GetCommunity]
})
export class CommunityProfileComponent implements OnInit {
  samples=[];

  constructor(private comm: GetCommunity) {
    this.comm.getCommunity().subscribe(res =>{this.samples=res;});
   }

  ngOnInit() {
  }

}
