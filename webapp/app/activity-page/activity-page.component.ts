import { Component, OnInit, Pipe,Input, PipeTransform } from '@angular/core';
import { ActivityService } from './activity-page.service';
import { AppBarService } from '../app-bar/app-bar.service';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { UserInfoService } from '../core/user-info.service';

@Component({
  selector: 'calvin-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.css']
})


export class ActivityPageComponent implements OnInit {
  activities = [];
  uname; sort; order; page; limit;
  user;
  username;
  flag = 0;
  domainName;
  //activity = [];
 
  public textData = `## Markdown content data`;

  @Input() community;
  constructor(private activityService: ActivityService, private userservice: UserInfoService, private value: AppBarService) { }

  ngOnInit() {
    //this.getActivities();
    this.userservice.getUserDetail((userdetails) => {
      this.user = userdetails;
      this.username = userdetails.username;
      this.flag = 1;
    });
    this.getMemberActivities();
    this.getDomainActivities();
  }
  // getActivities(){    
  //   this.activityService.getActivity()
  //   .subscribe(data => {
  //     this.activities = data;
  //     console.log("Object of activities", this.activities);
  //   });
  // }
  getMemberActivities() {
    this.activityService.getActivities(this.username, this.community, this.sort, this.order, this.page, this.limit)
      .subscribe(data => {
        this.activities = data;
        console.log("Object of activities", this.activities);
      });
  }
  getDomainActivities() {
    this.activityService.getActivitiesByDomainName(this.community)
      .subscribe(data => {
        this.activities = data;
        console.log("Object of activities", this.activities);
      });
  }
}
