import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
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
  data=["reply"];

  constructor(public dialog: MdDialog, private role: RoleServices,private route:ActivatedRoute) {
    this.role.listRoles(this.route.snapshot.params['domain']).subscribe(res => {
      this.sample = res;
    });
  }
  openDialog() {
    const dialog = this.dialog.open(CommunityToolActionsComponent);
  }
  ngOnInit() { }

  ondelete() { }

//   update()
// { console.log(this.sample,"ghfgf");
//   this.role.updateTools(this.data).subscribe(res => {
//     this.sample=res;   
//   });  
//   console.log(this.sample);
//   return this.sample;
// }
}

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {
  transform(sample, args: string[]): any {
    const keys = [];
    for (const key in sample) {
      if (sample.hasOwnProperty(key)) {
        keys.push({
          key: key,
          value: sample[key]
        });
      }
      return keys;
    }
  }
}
