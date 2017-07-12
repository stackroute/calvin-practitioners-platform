import { Component, Input, Inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MD_DIALOG_DATA, MdDialog, MdDialogRef} from '@angular/material';

import { CreateCommunityComponent } from '../create-community/create-community.component';

@Component({
  selector: 'calvin-newcommunity-dialogbox',
  templateUrl: './newcommunity-dialogbox.component.html',
  styleUrls: ['./newcommunity-dialogbox.component.css']
})

export class NewcommunityDialogboxComponent {

domainName;

constructor(
  private router: Router, 
  @Inject(MD_DIALOG_DATA) public data: any, 
  public dialogRef: MdDialogRef<NewcommunityDialogboxComponent>) {
  this.domainName = data.domainName;

  // This is not the recommended way of accessing data passed to the dialog, hence commenting, but for example sake keeping it
  // Refer https://github.com/angular/material2/issues/4002
  // console.log("Data in the dialog is: ", this.dialogRef._containerInstance.dialogConfig.data);
 }

 routeToManage() {
    this.router.navigate([`/app/managecommunity/${this.domainName}`]);
  }
}
