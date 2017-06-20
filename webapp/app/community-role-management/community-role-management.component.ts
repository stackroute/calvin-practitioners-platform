import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { CommunityRoleActionsComponent } from '../community-role-actions/community-role-actions.component';
import { CommunityToolActionsComponent } from '../community-tool-actions/community-tool-actions.component';
import { RoleServices } from './community-role-management.service';
@Component({
  selector: 'calvin-community-role-managements',
  templateUrl: './community-role-management.component.html',
  styleUrls: ['./community-role-management.component.css'],

})
export class CommunityRoleManagementComponent implements OnInit {
  sample = [];
  constructor(public dialog: MdDialog,private role:RoleServices) { 
     this.role.listRoles().subscribe(res=>{this.sample=res})
    }
  openDialog() {
    const dialog = this.dialog.open(CommunityToolActionsComponent);
  }
  
  ngOnInit() {
  }

}