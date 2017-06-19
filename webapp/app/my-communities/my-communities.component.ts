import { Component, OnInit } from '@angular/core';
import { MyCommunities } from './my-communities.services';

@Component({
selector: 'calvin-user-widgets',
templateUrl: './my-communities.component.html',
styleUrls: ['./my-communities.component.css'] ,
providers: [ MyCommunities ]
})
export class UserWidgetsComponent implements OnInit {
  items = 0;
  communities = [];
  constructor(private moviesearchservice: MyCommunities) { }

  ngOnInit() { }

  onScroll() {
    this.items = this.items + 10;
    console.log(this.items);
    this.getMyCommunity();
  }
  getMyCommunity() {

  }



}
