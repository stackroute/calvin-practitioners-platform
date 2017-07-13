import { Component, OnInit, Input } from '@angular/core';
import { MembersService } from '../community-members-widget/community-members-widget.service';
import { Route, Router } from '@angular/router';
import { InvitationServices } from "./member-invitation.service";

@Component({
  selector: 'calvin-member-invitation',
  templateUrl: './member-invitation.component.html',
  styleUrls: ['./member-invitation.component.css'],
  providers: [MembersService, InvitationServices]
})
export class MemberInvitationComponent implements OnInit {
  @Input() community: any;
  members;
  user: Object = {};
  memberrole = [{
    "value": "Admin", "viewvalue": "Admin",
  },
  {
    "value": "Moderator", "viewvalue": "Moderator",
  },
  {
    "value": "User", "viewvalue": "User",
  },
  ];
  memberfield = [
    {
      "email": "",
      "role": "",
    },
  ];

  newTodo: string;
  inviteMembers: any;
  addInvite: any;


  constructor(private invitationServices: InvitationServices, private membersWidget: MembersService, private router: Router) {
    this.newTodo = '';
    this.inviteMembers = [];
  }
  newField() {

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

  deleteSelectedinviteMembers() {
    for (var i = (this.inviteMembers.length - 1); i > -1; i--) {
      if (this.inviteMembers[i].completed) {
        this.inviteMembers.splice(i, 1);
      }
    }
  }

  onSendingInvitation(userdata: any){
    const memArr = [];
    const inviteArr = [];
    const memberVal = userdata.value;
    let i = 0;    
    while( i <= memberVal.index){
      const email = memberVal[`email${i}`];
      const role = memberVal[`role${i}`];
      const temp = {
        'username': email,
        'role': role
      }
      inviteArr.push(temp);
      i++;
    }
    console.log('inviteArr',JSON.stringify(inviteArr));
    this.invitationServices.inviteMember(inviteArr,'newstuffherea')
  }

  ngOnInit() {
  }

}
