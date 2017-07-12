import { Component, OnInit,Input, Inject } from '@angular/core';
import { ToolActions } from './community-tool-actions.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { MD_DIALOG_DATA, MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'calvin-community-tool-actions',
  templateUrl: './community-tool-actions.component.html',
  styleUrls: ['./community-tool-actions.component.css']
})
export class CommunityToolActionsComponent implements OnInit {
  selected = [];
  getresults=[];
  
  checkBoxValue: boolean = false;
  sample = [];
  a=[];
  domainName;
  roleName;
  y={};
  @Input() community;
 
  constructor(private tool: ToolActions, private route:ActivatedRoute,@Inject(MD_DIALOG_DATA) public data: any,
  public dialogRef: MdDialogRef<CommunityToolActionsComponent>) { 
  this.domainName = data.domain ; 
  this.roleName=data.role;
  console.log('domin name from dialog',this.roleName);
    
    this.tool.listTools(this.domainName).subscribe(res => {return this.sample.push(res);
    });
    
}

  getCheckboxValue(toolId, status) {
    // console.log(id);
    const grant="true";
    console.log(status)
    const x={};
    x[status]=grant;
    
    console.log(x)
    // console.log(action);
    const actions=x;
     const index = this.selected.indexOf(toolId);
     console.log(index)
    if (index === -1) {
      this.selected.push({toolId,actions});
    } else {
      this.selected.splice(index, 1);
    }
    console.log(this.selected,"fdsgsdgsdg");
    this.sample=this.selected;
    return this.sample;
    // 
  }
  
  exists(toolName, status) {
    return this.selected.indexOf({toolName,status}) > -1;
  }
  update()
  {
    console.log(this.selected);
    console.log(this.domainName);
    console.log(this.roleName);
    return this.tool.updateTools(this.domainName,this.roleName,this.selected).subscribe(res=>{return this.sample.push(res);
    });
  }

  ngOnInit() {
    
  }
 
 }