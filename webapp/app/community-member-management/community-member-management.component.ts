
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
    if(this.community) {
      this.membersService.getMember(this.community).subscribe(data => {
        this.members = data;
      })
    };
  }
  deleteMember(name)
  {
    let a=[];
    a.push({username:name});
      this.membersService.deleteMember(this.community,a).subscribe(data=>{
        this.members=data;
      });
  }
  onScroll() {
  }
  openDialog() {
    
   
    let dialogRef = this.dialog.open(MemberInvitationComponent,{
      data:this.community
    });
    
  }
  edit()
  {
    console.log('community name',this.community);
    let dialogRef = this.dialog.open(MemberEditComponent,{
      data:this.community
    });
  }
}