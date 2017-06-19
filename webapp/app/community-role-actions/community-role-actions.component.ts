import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { CommunityToolActionsComponent } from '../community-tool-actions/community-tool-actions.component';
@Component({
  selector: 'calvin-community-role-actions',
  templateUrl: './community-role-actions.component.html',
  styleUrls: ['./community-role-actions.component.css']
})
export class CommunityRoleActionsComponent implements OnInit {
dummy= [{'role': 'Member', 'actions': ['share', 'write', 'comment']},
       {'role': 'Admin', 'actions': ['post', 'add', 'remove', 'manage']},
       {'role': 'Secretary', 'actions': ['post', 'add', 'remove', 'manage', 'reply']}];
constructor(public dialog: MdDialog) { }
openDialog() {
    const dialog = this.dialog.open(CommunityToolActionsComponent); }

  ngOnInit() {}

}
