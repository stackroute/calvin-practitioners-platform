import { Component, OnInit, Input, Inject } from '@angular/core';
import { MembersService } from '../community-members-widget/community-members-widget.service';
import { Route, Router } from '@angular/router';
import { InvitationServices } from "./member-invitation.service";
import { MD_DIALOG_DATA, MdDialog, MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'calvin-member-invitation',
  templateUrl: './member-invitation.component.html',
  styleUrls: ['./member-invitation.component.css'],
  providers: [MembersService, InvitationServices]
})

export class MemberInvitationComponent {
  members;
  user: Object = {};
  newTodo: string;
  inviteMembers: any;
  addInvite: any;
  getResults = [];
  domain;

  constructor(private invite: InvitationServices,  public snackBar: MdSnackBar,private membersWidget: MembersService, private router: Router,
    @Inject(MD_DIALOG_DATA) public data: any, public dialogRef: MdDialogRef<MemberInvitationComponent>) {
    this.newTodo = '';
    this.inviteMembers = [];
    this.domain = data;
    this.invite.listUniqueRoles(this.domain).subscribe(res => {
      this.getResults = res;
    });
  }
  ngOnInit() {
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

  onSendingInvitation(userdata: any) {
    const memArr = [];
    const inviteArr = [];
    const memberVal = userdata.value;
    let i = 0;
    while (i <= memberVal.index) {
      const email = memberVal[`email${i}`];
      const role = memberVal[`role${i}`];
      const temp = {
        'username': email,
        'role': role
      }
      inviteArr.push(temp);
      i++;
    }

    this.invite.inviteMember(inviteArr, this.domain).subscribe(res => {
      this.dialogRef.close('close');
      this.snackBar.open('Invitaion Sent', 'X', {
        duration: 3000
      });

      return Observable.throw(this.getResults = res);
    });
  }



}
