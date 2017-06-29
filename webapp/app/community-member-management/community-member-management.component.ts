import { Component, OnInit } from '@angular/core';
import { MembersService } from '../community-members-widget/community-members-widget.service';
import { Route, Router } from '@angular/router';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { MemberInvitationComponent } from '../member-invitation/member-invitation.component';
@Component({
  selector: 'calvin-community-member-management',
  templateUrl: './community-member-management.component.html',
  styleUrls: ['./community-member-management.component.css'],
   providers: [MembersService]
})
export class CommunityMemberManagementComponent implements OnInit {
  members;
  constructor(private membersWidget: MembersService, private router: Router, public dialog: MdDialog) { }
  ngOnInit() {
    this.membersWidget.getMember().subscribe(data => {
    this.members = data.Members;
   });
  }
  onScroll() {
  }
openDialog() {
    const dialog = this.dialog.open(MemberInvitationComponent);
  }
  // routeToCommunity (communityDomain) {
  //   this.router.navigate(['/app/userCommunity', communityDomain]);
  // }
   // Get user community list
}
