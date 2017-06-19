import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'calvin-role-actions',
  templateUrl: './role-actions.component.html',
  styleUrls: ['./role-actions.component.css']
})
export class RoleActionsComponent implements OnInit {

  actions = ['read', 'write', 'reply', 'post', 'share'];
  chosenActions: string;
  constructor(public dialogRef: MdDialogRef<RoleActionsComponent>) { }

  confirmSelection() {
    this.dialogRef.close(this.chosenActions);
  }

  ngOnInit() {
  }

}
