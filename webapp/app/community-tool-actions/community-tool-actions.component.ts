import { Component, OnInit } from '@angular/core';
import { ToolActions } from './community-tool-actions.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'calvin-community-tool-actions',
  templateUrl: './community-tool-actions.component.html',
  styleUrls: ['./community-tool-actions.component.css']
})
export class CommunityToolActionsComponent implements OnInit {
  selected = [];
  getresults = [];
  domain = 'medical';
  checkBoxValue: boolean = false;
  sample = [];

  constructor(private tool: ToolActions) { }

  getCheckboxValue(toolName, status) {
    const id = toolName;
    const action = status;
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
    return this.selected.indexOf(toolName + status) > -1;
  }
  update()
  {
    console.log(this.selected);
    return this.tool.updateTools(this.selected).subscribe(res=>{this.sample=res});
  }

  ngOnInit() {
    this.tool.listTools(this.domain).subscribe(res => {
      this.sample = res;
    });
  }
}
