import { Component, OnInit, Input } from '@angular/core';
// import { InfiniteScrollModule } from 'angular2-infinite-scroll';

@Component({
  selector: 'calvin-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})

export class ActivityCardComponent implements OnInit {
  @Input() activity;
  constructor() {}
  // onscroll(){
  //   console.log("Scrolled");
  // }
  ngOnInit() {
  }
}
