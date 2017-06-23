import { Component, OnInit } from '@angular/core';
 import {GetCommunity} from '../manage-community/manage-community.service';

@Component({
  selector: 'calvin-community-profile',
  templateUrl: './community-profile.component.html',
  styleUrls: ['./community-profile.component.css'],
   providers: [GetCommunity]
})
export class CommunityProfileComponent implements OnInit {
  contents=[];
  arr=[];
  constructor(private comm: GetCommunity) {
   
   }

  ngOnInit() {
     console.log('.................');
     this.comm.getCommunity().subscribe(res =>{this.contents=res;
      
      this.arr=this.contents[0].tags;
    //  console.log('.................',this.tags); 
    });
    
  }

}
