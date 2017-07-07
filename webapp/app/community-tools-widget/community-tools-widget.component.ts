import { Component, OnInit } from '@angular/core';
import { ToolsService } from './community-tools-widget.service';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'calvin-community-tools-widget',
  templateUrl: './community-tools-widget.component.html',
  styleUrls: ['./community-tools-widget.component.css'],
  providers: [ToolsService]
})
export class CommunityToolsWidgetComponent implements OnInit {


  tools=[];
  constructor(private toolsWidget: ToolsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.toolsWidget.getTools(this.route.snapshot.params['domain']).subscribe(data => {
      this.tools = data;
    });
    
  }
}
