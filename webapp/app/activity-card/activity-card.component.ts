import { Component, OnInit , Input} from '@angular/core';
@Component({
  selector: 'calvin-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})
export class ActivityCardComponent implements OnInit {
 @Input() activity;
 public counter= 0;
 constructor() { }
  ngOnInit() {
  }
  likefunction() {
    this.counter = 1;
  }
    unlike() {
    if (this.counter > 0) {
      this.counter -= 1;
    } else {
      return this.counter;
    }
  }

}
