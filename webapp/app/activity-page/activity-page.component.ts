import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivityService } from './activity-page.service';
import { AppBarService } from '../app-bar/app-bar.service';

@Component({
 selector: 'calvin-activity-page',
 templateUrl: './activity-page.component.html',
 styleUrls: ['./activity-page.component.css']
})
export class ActivityPageComponent implements OnInit {
 tools = [];
 uname;community;sort;order;page;limit;
 user: {};
 flag = 0;
 public textData = `## Markdown content data`;
 constructor(private activitypage: ActivityService, private value: AppBarService) { }

 ngOnInit() {
   
   this.value.getuserinfo()
     .subscribe(res => {
       this.user = res;
       console.log(this.user);
       this.uname= res.username;
       this.flag = 1;
       console.log(this.uname);
       return this.uname;
     });
     this.activitypage.getTools(this.uname, this.community, this.sort, this.order, this.page, this.limit)
   .subscribe(data => {
     this.tools = data;
   });
 }
}