
import { Component, OnInit, Input } from '@angular/core';
// import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
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
  
  @Input() community: any;
  members = [];
  constructor(private membersService: Memberservice, public dialog: MdDialog) { }
  
  ngOnInit() {
    console.log("Current Domain is: ", this.community);
    if(this.community) {
      this.membersService.getMember(this.community).subscribe(data => {
        this.members = data;
      })
    };
  }
  deleteMember(name)
  {
       console.log('clicked delete');
 
    let a=[];
    a.push({username:name});
    console.log("hello-------array",a);
      this.membersService.deleteMember(this.community,a).subscribe(data=>{
        this.members=data;
      });
  }
  onScroll() {
  }
  openDialog() {
    const dialog = this.dialog.open(MemberInvitationComponent);
    
  }
  edit()
  {
    console.log('community name',this.community);
    let dialogRef = this.dialog.open(MemberEditComponent,{
      data:this.community
    });
  }
}