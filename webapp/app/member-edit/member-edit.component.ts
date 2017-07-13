import { Component, OnInit, Pipe, PipeTransform, Input, Inject } from '@angular/core';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { RoleListServices } from './member-edit.service';
import { MD_DIALOG_DATA, MdDialog, MdDialogRef} from '@angular/material';


@Component({
  selector: 'calvin-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css'],
  providers: [RoleListServices],
})
export class MemberEditComponent {
  @Input() community;
 members;
 getResults=[];
 domainname;
 
  constructor(private role: RoleListServices, private router: Router,private route: ActivatedRoute,
  @Inject(MD_DIALOG_DATA) public data: any, 
  public dialogRef: MdDialogRef<MemberEditComponent>) {
  
  // This is not the recommended way of accessing data passed to the dialog, hence commenting, but for example sake keeping it
  // Refer https://github.com/angular/material2/issues/4002
  // console.log("Data in the dialog is: ", this.dialogRef._containerInstance.dialogConfig.data);

   this.domainname = data;
   console.log("nn",data);
    console.log(this.domainname);
    this.role.listUniqueRoles(this.domainname).subscribe(res => {
      this.getResults = res;
      console.log("my result is",this.getResults);
      console.log('roles');
  });
  }
ngOnInit() {
    
  }

}
