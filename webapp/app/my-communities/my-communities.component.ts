import { Component, OnInit } from '@angular/core';
import { UserCommunities } from './my-communities.services';
import { Route, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { UserInfoService } from '../core/user-info.service';


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

  constructor(private userCommunities: UserCommunities, private userInfo: UserInfoService, private router: Router) { }

  ngOnInit() {

    // this.userInfo.getUserDetail(this.user). subscribe (res => {this.member = res;});

    this.userInfo.getUserDetail((userdetails) => {

      this.member = userdetails.username;

      console.log('user is : ' + this.member);

    });


    this.userCommunities.getCommunity(this.member).subscribe(res => {
    this.communities = res.communities;
      console.log("checkinggggg", this.communities);
    });


  }

  onScroll() {
  }

  routeToCommunity(domain) {
    this.router.navigate([`/app/communityDashBoard/${domain}`])

    //  Get user community list
    // getUserCommunity() {
    //   this.userCommunities
    //     .getCommunity()
    //     .subscribe(userCommunityList => {
    //       userCommunityList.forEach(element => {
    //         this.userCommunityListArray.push(element)
    //       });
    //     });
    //  }
  }
}