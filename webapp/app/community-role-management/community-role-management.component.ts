import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
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
  domain='medical';
  constructor(public dialog: MdDialog, private role: RoleServices) {
    this.role.listRoles(this.domain).subscribe(res => {
      this.sample = res;
    });
  }
  openDialog() {
    const dialog = this.dialog.open(CommunityToolActionsComponent);
  }
  ngOnInit() { }

  ondelete() { }
}
@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {
  transform(sample, args: string[]): any {
    const keys = [];
    for (const key in sample) {
      if (sample.hasOwnProperty(key)) {
        keys.push({
          key: key,
          value: sample[key]
        });
      }
      return keys;
    }
  }
}
