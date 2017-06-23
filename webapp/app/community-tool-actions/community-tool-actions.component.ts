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
 checkBoxValue: boolean = false;
 sample = [];
 constructor(private role: ToolActions) {}
 getCheckoxValue(toolName, status) {
  const id = toolName + status;
  const index = this.selected.indexOf(id);
  if (index === -1) {
   this.selected.push(id);
  } else {
   this.selected.splice(index, 1);
  }
  console.log(this.selected);
 }

 exists(toolName, status) {
  return this.selected.indexOf(toolName + status) > -1;
 }
 ngOnInit() {
  this.role.listTools().subscribe(res => {
   this.sample = res;
  });
 }
 update(key, value) {
  const obj = {
   key,
   value
  };
  return this.getresults.push(obj);
 }
}
