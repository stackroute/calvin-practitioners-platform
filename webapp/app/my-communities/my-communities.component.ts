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

  userCommunityListArray = [ ];
  communities = [];
  member = "mr.w" ;
  user;

  constructor(private userCommunities: UserCommunities,private userInfo: UserInfoService, private router: Router) { }
  
  ngOnInit() { 

    // this.userInfo.getUserDetail(this.user). subscribe (res => {this.member = res;});
    
//     this.userInfo.getUserDetail((userdetails)=>{
     
//       this.member=userdetails.email;
//       console.log(userdetails);
//       console.log(typeof userdetails);
//        console.log('user is : '+this.member);
// });

this.userCommunities.getCommunity(this.member). subscribe ( res => {  this.communities = res; 

  } );


  }
  
  onScroll() {
  }

  routeToCommunity (communityDomain){
    this.router.navigate(['/app/userCommunity', communityDomain]);
  }

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
