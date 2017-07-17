import { Component, OnInit,Input, Inject, Pipe, PipeTransform } from '@angular/core';
import { ToolActions } from './community-tool-actions.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { MD_DIALOG_DATA, MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import { KeysPipe } from './community-tool-actions.pipe';
import { CommunityRoleManagementComponent } from '../community-role-management/community-role-management.component';
import { RoleServices } from '../community-role-management/community-role-management.service';


@Component({
  selector: 'calvin-community-tool-actions',
  templateUrl: './community-tool-actions.component.html',
  styleUrls: ['./community-tool-actions.component.css'],
  providers:[CommunityRoleManagementComponent,RoleServices]
})
export class CommunityToolActionsComponent implements OnInit {
  selected = [];
  getresults=[];
  
  checkBoxValue: boolean = false;
  sample = [];
  a=[];
  domainName;
  roleName;
  toolActions=[];
  y={};
  @Input() community;
 
  constructor(private tool: ToolActions,private role: RoleServices, private snackBar:MdSnackBar, private route:ActivatedRoute,@Inject(MD_DIALOG_DATA) public data: any,
  public dialogRef: MdDialogRef<CommunityToolActionsComponent>,private roleManage:CommunityRoleManagementComponent) { 
  this.domainName = data.domain ; 
  this.roleName=data.role;
  this.toolActions=data.tool;
  console.log(data.domain);
  console.log('domain name from dialog',this.roleName);  
  console.log('tool',this.toolActions); 
      
}

  getCheckboxValue(toolId, status) {
    // console.log(id);
    //console.log(role);
    const grant = "true";
    //console.log(status)
    const x = {};
    x[status] = grant;

   // console.log(x)
    // console.log(action);
    const actions = x;
    const deleted = this.selected
   const index = this.selected.indexOf({toolId,actions});
  
   // console.log({toolId,actions,role});
    //console.log(this.selected.indexOf({toolId,actions,role}));
    if (index === -1) {
      this.selected.push({toolId,actions});
    }
    if(index > -1) {
      console.log(index)
      this.selected.splice(index,1);
    }
    console.log(this.selected, "fdsgsdgsdg");
    return this.selected;

  }
  
  exists(toolId, status) {
    console.log(this.selected);
    return this.selected.indexOf({toolId,status}) > -1;
  }
  update()
  {
    console.log(this.selected);
    console.log(this.domainName);
    console.log(this.roleName);
    return this.tool.updateTools(this.domainName,this.roleName,this.selected).subscribe(res=>{
      this.dialogRef.close('close');
      this.snackBar.open('Updated Actions Successfully','X',{
        duration:2000
      });
      this.sample.push(res);
      console.log(this.sample);
      //this.roleManage.roleManagement();
    });
    
  }

  ngOnInit() {
    this.tool.listTools(this.domainName).subscribe(res => {return this.sample.push(res);
    });
   
  }
 
 }
 