import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'calvin-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent implements OnInit {
  selectedActions: string;
  constructor(public dialog: MdDialog) { }


  openDialog() {
    const dialog = this.dialog.open(RoleManagementComponent);

    // dialog.afterClosed()
    //   .subscribe(selection => {
    //     if (selection) {
    //       this.selectedActions = selection;
    //     } else{}
    //   });
  }

  ngOnInit() {
  }

}
