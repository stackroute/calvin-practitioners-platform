import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivityService } from './activity-page.service';
import { AppBarService } from '../app-bar/app-bar.service';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

@Component({
  selector: 'calvin-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.css']
})
export class ActivityPageComponent implements OnInit {
  activities = [];
  uname;community;sort;order;page;limit;
  user: {};
  flag = 0;
  public textData = `## Markdown content data`;
  constructor(private activityService: ActivityService, private value: AppBarService) { }
 
  ngOnInit() { 
    this.getMemberActivities();   
  }

  getMemberActivities(){
    this.activityService.getActivities(this.uname, this.community, this.sort, this.order, this.page, this.limit)
    .subscribe(data => { 
      this.activities = data;
      console.log("Object of activities",this.activities);      
     });
  }
}
