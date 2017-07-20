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
  flag = 0;
  scrollDistance = 2
  constructor(private userCommunities: UserCommunities, private userInfo: UserInfoService, private router: Router) { }

  ngOnInit() {


    this.userInfo.getUserDetail((userdetails) => {

      this.member = userdetails.username;
     
    });

     this.userInfo.getUserCommunity((userCommunity) => {
       this.CommunitiesInfo = userCommunity;
      
   
     });
    


    // this.userCommunities.getCommunity(this.member).subscribe(res => {
    // this.communitiesAvatar = res;
     
    //   console.log("inside the component of my-communities", this.communitiesAvatar);
    // });



  }

 

  routeToCommunity(domain) {
     this.router.navigate([`/app/communityDashBoard/${domain}`]);


  }


}
