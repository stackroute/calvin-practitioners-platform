import { Component, OnInit, Pipe, PipeTransform, Input } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { CommunityRoleActionsComponent } from '../community-role-actions/community-role-actions.component';
import { CommunityToolActionsComponent } from '../community-tool-actions/community-tool-actions.component';
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
  a = [];
  b=[];
  c=[];

   @Input() community;

  constructor(public dialog: MdDialog, private role: RoleServices, private route: ActivatedRoute) {
    this.role.listRoles(this.route.snapshot.params['domain']).subscribe(res => { this.sample.push(res);


      // this.sample.forEach((val) => {
      //   let i = 0;
      //   let roleArr = [];
      //   while (i < val.roleactions.length) {
      //     let role = val.roleactions[i].role;
      //     let roleIndex = roleArr.indexOf(role);
      //     if (roleIndex === -1) {
      //       roleArr.push(role);
      //     }          
      //     i++;
      //   }

      //   let actionArr = new Array(roleArr.length);
      //   let j = 0;
      //   while (j < val.roleactions.length) {
      //     let role = val.roleactions[j].role;
      //     let action = val.roleactions[j].action;
      //     let roleIndex = roleArr.indexOf(role)
      //    // actionArr[roleIndex].push(action);
      //     console.log("actionArr",);

      //   j++;      
      //   }
      //   console.log("role Array",roleArr)
      //   console.log("actionArr",actionArr);
      //   console.log("actionArr",actionArr[0]);
      //    console.log("actionArr",actionArr[1]);
      //   // const role = val.role.map(x => x.toLowerCase());
      //   // const actions = val.actions.map(x => x.toLowerCase());

      //   // this.a.push({ role, actions: [actions] });
      //   // console.log(this.a);
      //  // return this.a;
      // });
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
    
    });
  }
  ngOnInit() { }

  openDialog(roleName) {
   
    const dialog = this.dialog.open(CommunityToolActionsComponent);
    console.log(this.role);
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
