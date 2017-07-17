import { Component, OnInit } from '@angular/core';
import { UserCommunities } from './my-communities.services';
import { Route, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { UserInfoService } from '../core/user-info.service';
import { CommunityProfileService } from '../community-profile/community-profile.service';


@Component({
  selector: 'calvin-user-widgets',
  templateUrl: './my-communities.component.html',
  styleUrls: ['./my-communities.component.css'],
  providers: [UserCommunities, UserInfoService],
})


export class UserWidgetsComponent implements OnInit {

  userCommunityListArray = [];
  communities = [];
  member;
  user;
  CommunitiesInfo = [];
 
  constructor(private userCommunities: UserCommunities, private userInfo: UserInfoService, private router: Router) { }

  ngOnInit() {

    // this.userInfo.getUserDetail(this.user). subscribe (res => {this.member = res;});

    this.userInfo.getUserDetail((userdetails) => {

      this.member = userdetails.username;
      console.log(userdetails);
      console.log(typeof userdetails);
      console.log('user is : ' + this.member);
    });

     this.userInfo.getUserCommunity((userCommunity) => {
       this.CommunitiesInfo = userCommunity;
       console.log("getting user communitiesss,,",this.CommunitiesInfo);

     });
    


    // this.userCommunities.getCommunity(this.member).subscribe(res => {
    // this.communitiesAvatar = res;
     
    //   console.log("inside the component of my-communities", this.communitiesAvatar);
    // });



  }

  // onScroll() {
  // }

  routeToCommunity(domain) {
     this.router.navigate([`/app/communityDashBoard/${domain}`]);


  }


}
