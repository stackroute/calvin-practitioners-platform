import { Component, OnInit, Pipe, PipeTransform, Input } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { CommunityRoleActionsComponent } from '../community-role-actions/community-role-actions.component';
import { CommunityNewRoleCreationComponent } from '../community-new-role-creation/community-new-role-creation.component';
import { RoleServices } from './community-role-management.service';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { KeysPipe } from '../community-role-actions/community-role-actions.pipe';
@Component({
  selector: 'calvin-community-role-managements',
  templateUrl: './community-role-management.component.html',
  styleUrls: ['./community-role-management.component.css'],

})
export class CommunityRoleManagementComponent implements OnInit {
  sample = [];
  getResults = [];
  a = [];
  resultArray=[];
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
         this.a.push(this.roleObj)
         console.log('roleObj', this.roleObj)
      });
      this.getResults.forEach((data) => {
        const roles = data.role;
        data.action = this.roleObj[roles];
        return this.getResults;
      });
      console.log(this.getResults);
      let domain=this.route.snapshot.params['domain'];
      let roleactions=this.getResults;
      return this.resultArray.push({domain,roleactions})
    });

    console.log(this.route.snapshot.params['domain']);

    this.role.listUniqueRoles(this.route.snapshot.params['domain']).subscribe(res => {
      this.getResults = res;     
      this.sample.forEach((value1) => {
        console.log("abcd",value1.roleactions)
        let test=value1.roleactions;
        console.log(test);
        test.forEach((value)=>
        {
          console.log(value)
          this.getResults.forEach((value2) => {
          console.log(value.action)
          if (value.role === value2.role) {
            this.b = value.action;
          }
          return this.a.push(this.b);
        });
        console.log(this.a);
        const id = value.role;
        const actions = this.a;
        return this.c.push(id,actions);
        })
        
        
      });
      console.log(this.c);
    
>>>>>>> b186dd275423d422e79d9326ef2ee122df23a778
    });
    console.log(this.resultArray)
  }
  ngOnInit() { }

  openDialog() {

     const dialog = this.dialog.open(CommunityNewRoleCreationComponent,{
      data:this.route.snapshot.params['domain']
      
    });
}

}

// @Pipe({
//   name: 'keys'
// })
// export class KeysPipe implements PipeTransform {
//   transform(sample, args: string[]): any {
//     const keys = [];
//     for (const key in sample) {
//       if (sample.hasOwnProperty(key)) {
//         keys.push({
//           key: key,
//           value: sample[key]
//         });
//       }
//       return keys;
//     }
//   }
// }
