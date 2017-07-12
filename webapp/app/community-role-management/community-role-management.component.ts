import { Component, OnInit, Pipe, PipeTransform, Input } from '@angular/core';
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
  sample = [];
  getResults = [];
  arrayObj = [];
  resultArray = [];
  roleObj = {};

  @Input() community;

  constructor(public dialog: MdDialog, private role: RoleServices, private route: ActivatedRoute) {
    this.role.listRoles(this.route.snapshot.params['domain']).subscribe(res => {
      this.sample.push(res);
      this.sample.forEach((val) => {
        let actionArr = [];
        let i = 0;
        (val.roleactions).forEach((data) => {
          const role = data.role;
          if (!this.roleObj[role]) { this.roleObj[role] = []; }
          this.roleObj[role].push(data.action);
        });
        this.arrayObj.push(this.roleObj)
        //console.log('roleObj', this.roleObj)
      });
      this.getResults.forEach((data) => {
        const roles = data.role;
        data.action = this.roleObj[roles];
        return this.getResults;
      });
      //console.log(this.getResults);
      let domain = this.route.snapshot.params['domain'];
      let roleactions = this.getResults;
      return this.resultArray.push({ domain, roleactions })
    });
    // console.log(this.route.snapshot.params['domain']);
    this.role.listUniqueRoles(this.route.snapshot.params['domain']).subscribe(res => {
      this.getResults = res;
    });
    //console.log(this.resultArray)
  }
  ngOnInit() { }

  openDialog() {

    const dialog = this.dialog.open(CommunityNewRoleCreationComponent, {
      data: this.route.snapshot.params['domain']

    });
  }

}

