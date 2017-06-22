import { Component, OnInit } from '@angular/core';
import { ToolActions } from './community-tool-actions.service';

@Component({
  selector: 'calvin-community-tool-actions',
  templateUrl: './community-tool-actions.component.html',
  styleUrls: ['./community-tool-actions.component.css']
})
export class CommunityToolActionsComponent implements OnInit {

  sample = [];
  constructor(private role: ToolActions) { }

  ngOnInit() {
    this.role.listTools().subscribe(res => {
      this.sample = res;
      console.log(this.sample);
    });
  }
}
