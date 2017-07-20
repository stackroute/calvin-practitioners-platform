import { Component, OnInit, Input, Inject } from '@angular/core';
import { MembersService } from '../community-members-widget/community-members-widget.service';
import { Route, Router } from '@angular/router';
import { InvitationServices } from "./member-invitation.service";
import { MD_DIALOG_DATA, MdDialog, MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { MdSnackBar } from '@angular/material';
import { UserInfoService } from '../core/user-info.service';
import { Memberservice } from '../community-member-management/community-member-management.service';


@Component({
  selector: 'calvin-member-invitation',
  templateUrl: './member-invitation.component.html',
  styleUrls: ['./member-invitation.component.css'],
  providers: [InvitationServices]
})

export class MemberInvitationComponent {
  members;
  user: Object = {};
  newTodo: string;
  inviteMembers: any;
  addInvite: any;
  getResults = [];
  domain;
    uservalue: {};
  username;
  aboutme;
  flag = 0;
  addInterestArr = [];
  profileArray = [];

  constructor(private membersService: Memberservice,private invite: InvitationServices, private userservice: UserInfoService, public snackBar: MdSnackBar,private membersWidget: MembersService, private router: Router,
    @Inject(MD_DIALOG_DATA) public data: any, public dialogRef: MdDialogRef<MemberInvitationComponent>) {
    this.newTodo = '';
    this.inviteMembers = [];
    this.domain = data;
    this.invite.listUniqueRoles(this.domain).subscribe(res => {
      this.getResults = res;
    });
  }
  ngOnInit() {
     this.userservice.getUserDetail((userdetails) => {
      this.uservalue = userdetails;
      this.username = userdetails.username;
      this.flag = 1;
      console.log("INVITED BY NAME",this.username);
    });
    // this.profileService.getUserProfile(this.username).subscribe(res => {
    //   this.profileArray = res;
    // });
  }

  addTodo(event) {
    this.addInvite = {
      newTodo: this.newTodo,
      completed: false
    }
    this.inviteMembers.push(this.addInvite);
    this.newTodo = '';
    event.preventDefault();
  }

  deleteTodo(index) {
    this.inviteMembers.splice(index, 1);
  }
 getMember(){
     
      this.membersService.getMember(this.domain).subscribe(data => {
        this.members = data;
      })
    };
  
  onSendingInvitation(userdata: any) {
    const memArr = [];
    const inviteArr = [];
    const memberVal = userdata.value;
    let i = 0;
    while (i <= memberVal.index) {
      const email = memberVal[`email${i}`];
      const role = memberVal[`role${i}`];
      const temp = {
       
        'role': role,
         'email': email,
      }
      inviteArr.push(temp);
      i++;
    }

    const postInvite = {       
        "invitee": inviteArr,
        "invitedby": this.username
     } 
    console.log("post array sent",postInvite);
    this.invite.inviteMember(postInvite, this.domain).subscribe(res => {
      this.dialogRef.close('close');
      this.snackBar.open('Invitaion Sent', 'X', {
        duration: 3000
      });

       Observable.throw(this.getResults = res);
      this.getMember();
    });
  }



}

// // Invalid user Invitation component
// @Component({
//   selector: 'invalid-user',
//   templateUrl: 'invalid-user.html',
// })

// export class InvalidLoginComponent {
//   constructor() { }
// }

// //Accept and Reject Invitation component

// @Component({
//   selector: 'accept-page',
//   templateUrl: 'accept-page.html',
// })

// export class AcceptPageComponent {
//   memberArray=[];
//   constructor(private invite: InvitationServices){ }
// }