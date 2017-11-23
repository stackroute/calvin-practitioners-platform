import { Component, OnInit, Input, Inject, Pipe, PipeTransform } from '@angular/core';
import { ToolActions } from './community-tool-actions.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { MD_DIALOG_DATA, MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { KeysPipe } from './community-tool-actions.pipe';
// import { CommunityRoleManagementComponent } from '../community-role-management/community-role-management.component';
import { RoleServices } from '../community-role-management/community-role-management.service';


@Component({
  selector: 'calvin-community-tool-actions',
  templateUrl: './community-tool-actions.component.html',
  styleUrls: ['./community-tool-actions.component.css'],
  providers: [RoleServices]
})
export class CommunityToolActionsComponent implements OnInit {
 selected = [];
 getresults = [];

 checkBoxValue: boolean = false;
 sample = [];
 toolArray = [];
 domainName;
 roleName;
 toolActions = [];
 y = {};
 @Input() community;

 constructor(private tool: ToolActions,
  private role: RoleServices,
  private snackBar: MdSnackBar,
  @Inject(MD_DIALOG_DATA) public data: any,
  public dialogRef: MdDialogRef < CommunityToolActionsComponent > ) {
  this.domainName = data.domain;
  this.roleName = data.role;
  this.toolActions = data.tool;
 }

 getCheckboxValue(toolId, status) {
  const grant = "true";
  const x = {};
  x[status] = grant;
  const actions = x;
  const deleted = this.selected
  const index = this.selected.indexOf({
   toolId,
   actions
  });
  if (index === -1) {
   this.selected.push({
    toolId,
    actions
   });
  }
  if (index > -1) {
   this.selected.splice(index, 1);
  }
  return this.selected;

 }

 exists(toolId, status) {
  console.log(this.selected);
  return this.selected.indexOf({
   toolId,
   status
  }) > -1;
 }

 update() {
  this.tool.updateTools(this.domainName, this.roleName, this.selected)
   .subscribe(res => {
    this.snackBar.open('Updated Actions Successfully', 'X', {
     duration: 2000
    });
    this.sample=[];
    this.toolArray.push(res);
    this.sample = this.toolArray;
    this.dialogRef.close({
     roleName: this.roleName,
     selected: this.selected,
     res: res
    });
   });
    this.sample=[];
    
 }

 ngOnInit() { 
   
  this.tool.listTools(this.domainName).subscribe(res => {
   this.sample.push(res);
  });
  
 }

}