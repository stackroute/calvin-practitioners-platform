import { Component, OnInit } from '@angular/core';
import { mycommunities } from './my-communities.services'

@Component({
  selector: 'calvin-user-widgets',
  templateUrl: './my-communities.component.html',
  styleUrls: ['./my-communities.component.css'],
  providers: [ mycommunities ]
})
export class UserWidgetsComponent implements OnInit {
  items = 0;
  communities = [];
  constructor(private moviesearchservice:mycommunities) { }

  ngOnInit() { }

  onScroll () {
    this.items+10;
    console.log(this.items);
    this.getMyCommunity();
  }
  getMyCommunity (){   
    
  }
  


}
