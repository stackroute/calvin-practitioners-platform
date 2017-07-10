import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'calvin-community-profile',
  templateUrl: './community-profile.component.html',
  styleUrls: ['./community-profile.component.css'],
  // providers: [GetCommunity],
})

export class CommunityProfileComponent implements OnInit {

 @Input() profile;
 
 counter = true;

  constructor() {
    
    // this.createdOn = this.profile.createdon;
    // console.log("displaying the date",createdOn); 
   
  } 

  ngOnInit() {

  }
}