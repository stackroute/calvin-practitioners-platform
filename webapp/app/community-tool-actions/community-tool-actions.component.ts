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
  getresults:any[];
  domain = 'medical';
  checkBoxValue: boolean = false;
  sample = [];
  a=[];
  domainName;

  @Input() community;

  constructor(private tool: ToolActions, private route:ActivatedRoute,@Inject(MD_DIALOG_DATA) public data: any,
  public dialogRef: MdDialogRef<CommunityToolActionsComponent>) {
  this.domainName = data ; 
  console.log('domin name from dialog',this.domainName);
}

  getCheckboxValue(toolName, status) {
    const id = toolName;
    // console.log(id);
    const action = status;
    // console.log(action);
    const index = this.selected.indexOf(id);
    if (index === -1) {
      this.selected.push({ id, action });
    } else {
      this.selected.splice(index, 1);
    }
    console.log(this.selected);
    return this.selected;
    // 
  }
  exists(toolName, status) {
    return this.selected.indexOf({toolName,status}) > -1;
  }
  update(role)
  {
    console.log(this.selected);
    console.log(this.domainName);
    return this.tool.updateTools(this.selected,role,this.domainName).subscribe(res=>{this.sample=res});
  }

  ngOnInit() {
    this.tool.listTools(this.domainName).subscribe(res => {return this.sample.push(res);
    });
    
  }
 
 }
