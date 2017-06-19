import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';
import { CommunityToolActionsComponent } from '../community-tool-actions/community-tool-actions.component';
@Component({
  selector: 'calvin-community-role-actions',
  templateUrl: './community-role-actions.component.html',
  styleUrls: ['./community-role-actions.component.css']
})
export class CommunityRoleActionsComponent implements OnInit {
 @Input() dummy;
  constructor(public dialog: MdDialog) { }
  openDialog() {
    const dialog = this.dialog.open(CommunityToolActionsComponent);
  }

  ngOnInit() { }

}
