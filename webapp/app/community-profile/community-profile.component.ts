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
   
  } 

  ngOnInit() {
  }
}