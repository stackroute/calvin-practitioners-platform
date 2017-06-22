import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';
import { MdDialog } from '@angular/material';
import { CommunityToolActionsComponent } from '../community-tool-actions/community-tool-actions.component';
import { CommunityRoleManagementComponent } from '../community-role-management/community-role-management.component';
import { RoleServices } from '../community-role-management/community-role-management.service';
import { KeysPipe } from './community-role-actions.pipe';
@Component({
  selector: 'calvin-community-role-actions',
  templateUrl: './community-role-actions.component.html',
  styleUrls: ['./community-role-actions.component.css'],
})
export class CommunityRoleActionsComponent implements OnInit {
  @Input() dummy;
  constructor(public dialog: MdDialog, private role: RoleServices, private action: CommunityRoleManagementComponent) { }
  openDialog() {
    const dialog = this.dialog.open(CommunityToolActionsComponent);
  }
  ngOnInit() { }

}
