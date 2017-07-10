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
  c = [];
  b = {};
  @Input() community;

  constructor(public dialog: MdDialog, private role: RoleServices, private route: ActivatedRoute) {
    this.role.listRoles(this.route.snapshot.params['domain']).subscribe(res => {
      this.sample = res;
    });
    console.log(this.route.snapshot.params['domain']);
    this.role.listUniqueRoles(this.route.snapshot.params['domain']).subscribe(res => {
      this.getResults = res;

      this.sample.forEach((value) => {
        console.log(value.role)
        this.getResults.forEach((value2) => {
          console.log(value2.actions)
          if (value.role === value2.role) {

            this.b = value.actions;

            return this.a.push(this.b);
          }
        });
        console.log(this.a);
        const id = value.role;
        const actions = this.a;
        return this.c.push({ id, actions });
      });
      console.log(this.c);



    });
  }
  ngOnInit() { }

  ondelete() { }

  openDialog() {
    let dialogRef = this.dialog.open(NewRole);
  }

}

@Component ({
selector: 'new-role',
  templateUrl: 'newRole.html',})
  export class NewRole {

  constructor(public dialog: MdDialog,private router: Router) {}
  openDialog() {
      const dialog = this.dialog.open(CommunityToolActionsComponent);
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
