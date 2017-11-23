import { Component, OnInit, Input } from '@angular/core';
// import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { UserInfoService } from '../core/user-info.service';

@Component({
  selector: 'calvin-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})

export class ActivityCardComponent implements OnInit {
  user;
  avatar;
  flag = 0;
  decoratedActivity;
  @Input() activity;
  constructor(private userservice: UserInfoService) { }
  
  ngOnInit() {
    this.decoratedActivity = this.activity.payload.payload.payload;
    this.userservice.getUserDetail((userdetails) => {
      this.user = userdetails;
      this.avatar = userdetails.avatar;
      this.flag = 1;
      console.log("UserName is", this.avatar);
    });
  }
}
