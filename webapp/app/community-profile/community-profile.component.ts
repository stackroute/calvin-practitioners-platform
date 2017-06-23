import { Component, OnInit } from '@angular/core';
 import {GetCommunity} from '../manage-community/manage-community.service';

@Component({
  selector: 'calvin-community-profile',
  templateUrl: './community-profile.component.html',
  styleUrls: ['./community-profile.component.css'],
   providers: [GetCommunity]
})
export class CommunityProfileComponent implements OnInit {
  content=[];

  constructor(private comm: GetCommunity) {
   
   }

  ngOnInit() {
     this.comm.getCommunity().subscribe(res =>{this.content=res;});
    console.log(this.content);
  }

}
