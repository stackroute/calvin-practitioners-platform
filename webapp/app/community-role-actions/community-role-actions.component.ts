import { Component, OnInit, Input, Output, Pipe, PipeTransform, EventEmitter } from '@angular/core';
import { MdDialog } from '@angular/material';
import { CommunityToolActionsComponent } from '../community-tool-actions/community-tool-actions.component';
import { CommunityRoleManagementComponent } from '../community-role-management/community-role-management.component';
import { RoleServices } from '../community-role-management/community-role-management.service';
import {MdProgressSpinnerModule} from '@angular/material';

@Component({
  selector: 'calvin-community-role-actions',
  templateUrl: './community-role-actions.component.html',
  styleUrls: ['./community-role-actions.component.css'],
})
export class CommunityRoleActionsComponent implements OnInit {

  @Input() roleActionColln;
  @Output() onRoleModified = new EventEmitter<any>();
 
  constructor(public dialog: MdDialog, 
  private role: RoleServices, private action: CommunityRoleManagementComponent) { }
onRolModifiedInDialog(modifiedRole) {
 this.onRoleModified.emit(modifiedRole);
}

openModifyRoleActionsDialog(roleName, roleActionColln) {
 console.log('dummy data', this.roleActionColln.toolactions);
 const dialogRef = this.dialog.open(CommunityToolActionsComponent, {
  disableClose: true,
  data: {
   domain: this.roleActionColln.domain,
   role: roleName,
   tool: this.roleActionColln.toolactions
  }
 });
 dialogRef.afterClosed()
  .subscribe(result => {
   console.log(result, "result", "modify");
   this.onRolModifiedInDialog(result);
  });

 console.log(this.onRolModifiedInDialog, "result");
}
ngOnInit() {}
}