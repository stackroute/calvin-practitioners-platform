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
    this.role.listUniqueRoles(this.route.snapshot.params['domain']).subscribe(res => {
      this.getResults = res;
    });
    // console.log(this.route.snapshot.params['domain']);    
    //console.log(this.resultArray)
  }
  ngOnInit() {    
    this.role.listRoles(this.route.snapshot.params['domain']).subscribe(res => {
      this.sample.push(res);{
      this.sample.forEach((val) => {
        
        
        (val.roleactions).forEach((data) => {
          const role = data.role;
          const toolid=data.toolid;
          if (!this.roleObj[role]) { this.roleObj[role] = []; }
          if(!this.roleObj[toolid]){ this.roleObj[toolid]=[];}
          this.roleObj[role].push(data.action);
          this.roleObj[toolid].push(data.toolid);
        });
       // this.arrayObj.push(this.roleObj)
        console.log('roleObj', this.roleObj)
        });
        this.getResults.forEach((data) => {
        const roles = data.role;
        const toolid=data.toolid;
        data.action = this.roleObj[roles];
        data.toolid=this.roleObj[toolid];
        return this.getResults;
      });
      console.log(this.getResults);
      let domain = this.route.snapshot.params['domain'];
      let roleactions = this.getResults;
      this.resultArray.push({ domain, roleactions });
      return this.resultArray;
    }
    
    });
   }

  openDialog() {

    const dialog = this.dialog.open(CommunityNewRoleCreationComponent, {
      data: this.route.snapshot.params['domain']

    });
  }

}

