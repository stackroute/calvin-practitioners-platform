import { Component, OnInit } from '@angular/core';
import { UserCommunities } from './my-communities.services';

@Component({

  selector: 'calvin-user-widgets',
  templateUrl: './my-communities.component.html',
  styleUrls: ['./my-communities.component.css'],
  providers: [ UserCommunities ]
})
export class UserWidgetsComponent implements OnInit {
  userCommunityListArray = [ ];
  constructor(private userCommunities: UserCommunities) { }

  ngOnInit() { 
    this.getUserCommunity();
  }

  // Get user community list
  getUserCommunity() {
    this.userCommunities
      .getCommunity()
      .subscribe(userCommunityList => {
        userCommunityList.forEach(element => {
          this.userCommunityListArray.push(element)
        });
      });
  }
}
