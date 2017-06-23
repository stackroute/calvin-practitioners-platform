import { Component, OnInit ,Pipe ,PipeTransform} from '@angular/core';
import { ActivityService } from './activity-page.service';

@Component({
  selector: 'calvin-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.css']
})
export class ActivityPageComponent implements OnInit {

  public textData = `## Markdown content data`;
  constructor(private activitypage: ActivityService) { }

  tools = [];
  ngOnInit() {
    this.activitypage.getTools().subscribe(data => {
      this.tools = data.Tools;
    });
  }
}