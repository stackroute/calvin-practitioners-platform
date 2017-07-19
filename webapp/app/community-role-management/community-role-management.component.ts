import { Component, OnInit, Input, Output, Pipe, PipeTransform, EventEmitter } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { CommunityRoleActionsComponent } from '../community-role-actions/community-role-actions.component';
import { CommunityNewRoleCreationComponent } from '../community-new-role-creation/community-new-role-creation.component';
import { RoleServices } from './community-role-management.service';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'calvin-community-role-managements',
  templateUrl: './community-role-management.component.html',
  styleUrls: ['./community-role-management.component.css'],

})
export class CommunityRoleManagementComponent implements OnInit {
 roleArray = [];
 toolArray = [];
 arrayObj = [];
 resultArray = [];
 roleObj = {};
 toolObj = {};

 @Input() community;

 constructor(public dialog: MdDialog,
  private role: RoleServices, private route: ActivatedRoute) {

 }

 roleManagement() {
  //Keep it empty, before fetching and populating
  this.roleArray = [];
  this.role.listRoles(this.community).subscribe(res => {
  
   this.roleArray.push(res);
   this.roleArray.forEach((val) => {
    (val.roleactions).forEach((data) => {
      
     const role = data.role;
     const toolid = data.toolid;
     if (!this.roleObj[role]) {
      this.roleObj[role] = [];
     }
     if (!this.toolObj[toolid]) {
      this.toolObj[toolid] = [];
     }
     this.roleObj[role].push(data.action);
     this.toolObj[toolid].push(data.action);
    });
   });
   this.toolArray.forEach((data) => {
    const roles = data.role;
    data.action = this.roleObj[roles];
   });
   let domain = this.route.snapshot.params['domain'];
   let roleactions = this.toolArray;
   let toolactions = this.toolObj;
   this.resultArray.push({
    domain,
    roleactions,
    toolactions
   });
   
  });
  this.roleArray = [];
  this.resultArray = [];
  this.roleObj = {};
  this.toolObj = {}; 
 }

 openNewRoleDialog() {
  const dialogRef = this.dialog.open(CommunityNewRoleCreationComponent, {
   disableClose: true,
   data: this.community,
  });
  dialogRef.afterClosed()
   .subscribe(res => {
      this.roleManagement();
    //console.log(this.roleArray)
   });
 }
 onRoleModified(modifiedRole: any) {
  this.roleManagement();
 }

 ngOnInit() {
  this.role
   .listUniqueRoles(this.community)
   .subscribe(res => {
    this.toolArray = res;
    this.roleManagement();
   });
 }
}