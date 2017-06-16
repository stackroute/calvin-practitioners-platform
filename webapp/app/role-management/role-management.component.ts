import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import { RoleActionsComponent } from '../role-actions/role-actions.component';

@Component({
  selector: 'calvin-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent implements OnInit {
selectedActions: string;
  constructor(public dialog: MdDialog) { }


openDialog() {
    const dialog = this.dialog.open(RoleActionsComponent);

    dialog.afterClosed()
      .subscribe(selection => {
        if (selection) {
          this.selectedActions = selection;
        } else {
          // User clicked 'Cancel' or clicked outside the dialog
        }
      });
  }

  ngOnInit() {
  }

}
