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
<<<<<<< HEAD
}
@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(tools, args:string[]) : any {
    let keys = [];
    for (let key in tools) {
      keys.push({key: key, value: tools[key]});
    }
    return keys;
  }
=======
>>>>>>> 32943b1db109e454fb18b27a947df5df639c6fe8
}