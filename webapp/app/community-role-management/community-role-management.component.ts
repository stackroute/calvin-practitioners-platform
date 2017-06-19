import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { CommunityRoleActionsComponent } from '../community-role-actions/community-role-actions.component';
import { CommunityToolActionsComponent } from '../community-tool-actions/community-tool-actions.component';
@Component({
  selector: 'calvin-community-role-managements',
  templateUrl: './community-role-management.component.html',
  styleUrls: ['./community-role-management.component.css'],

})
export class CommunityRoleManagementComponent implements OnInit {
dummy= [{'role': 'Member', 'actions': ['share', 'write', 'comment']},
       {'role': 'Admin', 'actions': ['post', 'add', 'remove', 'manage']},
       {'role': 'Secretary', 'actions': ['post', 'add', 'remove', 'manage', 'reply']}];
       constructor(public dialog: MdDialog) {}
  openDialog() {
    const dialog = this.dialog.open(CommunityToolActionsComponent); }
  ngOnInit() {
  }

}
