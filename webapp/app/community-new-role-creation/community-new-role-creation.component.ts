import { Component, OnInit, Input, Inject } from '@angular/core';
import { NewRoleService } from './community-new-role-creation.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { MD_DIALOG_DATA, MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'calvin-community-new-role-creation',
  templateUrl: './community-new-role-creation.component.html',
  styleUrls: ['./community-new-role-creation.component.css']
})
export class CommunityNewRoleCreationComponent implements OnInit {
  selected = [];
  getresults = [];
  checkBoxValue: boolean = false;
  sample = [];
  domainName;

  @Input() community;

  constructor(private tool: NewRoleService, private route: ActivatedRoute, @Inject(MD_DIALOG_DATA) public data: any,
    public dialogRef: MdDialogRef<CommunityNewRoleCreationComponent>) {
    this.domainName = data;
    //console.log('domin name from dialog', this.domainName);

    this.tool.listTools(this.domainName).subscribe(res => {
      return this.sample.push(res);
    });
  }

  getCheckboxValue(toolId, status, role) {
    // console.log(id);
    //console.log(role)
    const grant = "true";
    //console.log(status)
    const x = {};
    x[status] = grant;

   // console.log(x)
    // console.log(action);
    const actions = x;
    const index = this.selected.indexOf(toolId);
   // console.log(index)
    if (index === -1) {
      this.selected.push({ toolId, actions, role });
    } else {
      this.selected.splice(index, 1);
    }
    //console.log(this.selected, "fdsgsdgsdg");

    return this.selected;

  }

  exists(toolName, status) {
    return this.selected.indexOf({ toolName, status }) > -1;
  }
  update(role) {
    // console.log(this.selected);
    // console.log(this.domainName);
    // console.log(role);
    // let a=this.selected.push({role});
    return this.tool.updateTools(this.domainName, this.selected).subscribe(res => {
      this.sample.push(res);
    });
  }

  ngOnInit() {

  }

}
