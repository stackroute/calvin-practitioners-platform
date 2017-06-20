import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MdDialog } from '@angular/material';
import { CommunityToolActionsComponent } from '../community-tool-actions/community-tool-actions.component';
import { RoleServices } from '../community-role-management/community-role-management.service';
@Component({
  selector: 'calvin-community-role-actions',
  templateUrl: './community-role-actions.component.html',
  styleUrls: ['./community-role-actions.component.css']
})
export class CommunityRoleActionsComponent implements OnInit {
 @Input() dummy;
 constructor(public dialog: MdDialog, private role: RoleServices) {}
  openDialog() {
    const dialog = this.dialog.open(CommunityToolActionsComponent);
  }

  update(id, role, actions) {
     const obj = {id, role, actions};
     console.log(obj);
  this.role.updateRole(obj).subscribe(data => {this.dummy = data; });
  console.log(this.dummy);
}
ngOnInit() { }

}
