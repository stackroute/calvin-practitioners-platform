import { Component, OnInit } from '@angular/core';
import { UserCommunities } from './my-communities.services';
import { Route, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({

  selector: 'calvin-user-widgets',
  templateUrl: './my-communities.component.html',
  styleUrls: ['./my-communities.component.css'],
  providers: [UserCommunities]
})
export class UserWidgetsComponent implements OnInit {
  userCommunityListArray = [ ];
  constructor(private userCommunities: UserCommunities, private router: Router) { }
  
  ngOnInit() { 
    this.getUserCommunity();
  }
  
  onScroll() {
  }

  routeToCommunity (communityDomain){
    this.router.navigate(['/app/userCommunity', communityDomain]);
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
