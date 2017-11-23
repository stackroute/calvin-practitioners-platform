import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter} from '@angular/core';

import * as moment from 'moment/moment';
// import { UserInfoService } from '../core/user-info.service';
import { ManageCommunityComponent } from '../manage-community/manage-community.component';
import { CommunityProfileService } from '../community-profile/community-profile.service';

@Component({
  selector: 'calvin-community-profile',
  templateUrl: './community-profile.component.html',
  styleUrls: ['./community-profile.component.css'],
  providers: [CommunityProfileService ],
})

export class CommunityProfileComponent implements OnInit {

 @Input() profile;
  @Output() onVoted = new EventEmitter<boolean>();
  communities = [];
  voted = false;
  counter = true;

  
   vote(agreed:boolean) {
    this.onVoted.emit(agreed);
    this.voted = true;
  
 
  }

  constructor(private commGetCommunity:CommunityProfileService) {
    
  } 

  ngOnInit() {

 
  }


  }
