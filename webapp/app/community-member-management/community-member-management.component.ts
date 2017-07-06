import { Component, OnInit, Input } from '@angular/core';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { MemberInvitationComponent } from '../member-invitation/member-invitation.component';
import { Memberservice } from './community-member-management.service';
import { MemberEditComponent } from "../member-edit/member-edit.component";
@Component({
 selector: 'calvin-community-member-management',
 templateUrl: './community-member-management.component.html',
 styleUrls: ['./community-member-management.component.css'],
  providers: [Memberservice]
})
export class CommunityMemberManagementComponent implements OnInit {
 @Input() community;
 
 members = [];
 constructor(private membersWidget: Memberservice, private router: Router, public dialog: MdDialog ,private route: ActivatedRoute) { }
 ngOnInit() {    console.log("Current Domain is: ", this.route.snapshot.params['domain']);
   if(this.community) {
     this.membersWidget.getMember(this.route.snapshot.params['domain']).subscribe(data => {
   this.members = data;
   console.log(this.members);
  });
 
   }
   else if(this.route.snapshot.params['domain'])
   { this.membersWidget.getMember(this.route.snapshot.params['domain']).subscribe(data => {
   this.members = data;
   console.log(this.members);
  });
 
   }
   else {
console.log("error");
   }  
   // this.members = data;
   // console.log(this.members);
 
 }
 onScroll() {
 }
openDialog() {
   const dialogRef = this.dialog.open(MemberInvitationComponent, {
     data: this.community
   });    
 }
 edit()
 {
 const dialog = this.dialog.open(MemberEditComponent);
 }
}