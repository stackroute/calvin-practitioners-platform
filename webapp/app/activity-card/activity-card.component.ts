import { Component, OnInit, Input } from '@angular/core';
import { KeysPipe } from './activity-card.pipe';

@Component({
  selector: 'calvin-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})

export class ActivityCardComponent implements OnInit {
  
  @Input() activity;
  constructor() {}
  ngOnInit() {
  }
}
