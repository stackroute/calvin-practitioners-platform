import { Component, OnInit, Pipe, PipeTransform, Input, Inject } from '@angular/core';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { RoleListServices } from './member-edit.service';
import { MD_DIALOG_DATA, MdDialog, MdDialogRef} from '@angular/material';
import { Memberservice } from '../community-member-management/community-member-management.service';


@Component({
  selector: 'calvin-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css'],
  providers: [RoleListServices,Memberservice],
})
export class MemberEditComponent {
  @Input() community;
 members;
 getResults=[];
 domainname;
 coreValue ;
 sample=[];
 
  constructor(private membersService: Memberservice,private role: RoleListServices, private router: Router,private route: ActivatedRoute,
  @Inject(MD_DIALOG_DATA) public data: any, 
  public dialogRef: MdDialogRef<MemberEditComponent>) {
  
  // This is not the recommended way of accessing data passed to the dialog, hence commenting, but for example sake keeping it
  // Refer https://github.com/angular/material2/issues/4002
  // console.log("Data in the dialog is: ", this.dialogRef._containerInstance.dialogConfig.data);

   this.domainname = data.domain;
   console.log("nn",this.community);
    console.log("ggg",this.domainname);
    console.log("name is",data.val);
    this.role.listUniqueRoles(this.domainname).subscribe(res => {
      this.getResults = res;
      console.log("my result is",this.getResults);
      console.log('roles');
  });
}
 getMember(){
    if(this.community) {
      this.membersService.getMember(this.community).subscribe(data => {
        this.members = data;
      })
    };
  }
 update(name)
  {
    console.log('my update value', name, this.coreValue);
    let a=[];
    a.push({username:name,role:this.coreValue});
       console.log("hello-------array",a);
     this.role.updateRole(this.domainname,a).subscribe(res=>{ this.sample.push(res);
      this.getMember();
    });
  }
  selectCore(core) {
    this.coreValue = core;
    console.log('core value',this.coreValue);
  }

ngOnInit() {
    this.getMember();
  }

}
