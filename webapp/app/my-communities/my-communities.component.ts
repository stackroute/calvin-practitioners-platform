import { Component, OnInit } from '@angular/core';
import { UserCommunities } from './my-communities.services';

@Component({

  selector: 'calvin-user-widgets',
  templateUrl: './my-communities.component.html',
  styleUrls: ['./my-communities.component.css'],
  providers: [UserCommunities]
})
export class UserWidgetsComponent implements OnInit {
  items = 0;
  communities = [];
  constructor(private moviesearchservice: UserCommunities) { }

  ngOnInit() { }

  onScroll() {
    this.items = this.items + 10;

    console.log(this.items);
    this.getMyCommunity();
  }
  getMyCommunity() {


  }
}
