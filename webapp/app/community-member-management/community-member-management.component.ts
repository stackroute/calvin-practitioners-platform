import { Component, OnInit } from '@angular/core';
import { UserCommunities } from '../my-communities/my-communities.services';
import { Route, Router } from '@angular/router';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { MemberInvitationComponent } from '../member-invitation/member-invitation.component';
@Component({
  selector: 'calvin-community-member-management',
  templateUrl: './community-member-management.component.html',
  styleUrls: ['./community-member-management.component.css'],
   providers: [UserCommunities]
})
export class CommunityMemberManagementComponent implements OnInit {
   userCommunityListArray = [ ];
  constructor(private userCommunities: UserCommunities, private router: Router, public dialog: MdDialog) { }
  ngOnInit() {
    this.getUserCommunity();
  }
  onScroll() {
  }
openDialog() {
    const dialog = this.dialog.open(MemberInvitationComponent);
  }
  routeToCommunity (communityDomain) {
    this.router.navigate(['/app/userCommunity', communityDomain]);
  }

   // Get user community list
  getUserCommunity() {
    this.userCommunities
      .getCommunity()
      .subscribe(userCommunityList => {
        userCommunityList.forEach(element => {
          this.userCommunityListArray.push(element);
        });
      });
   }
}
