import { Component, OnInit } from '@angular/core';
import { ToolsService } from './community-tools-widget.service';

@Component({
  selector: 'calvin-community-tools-widget',
  templateUrl: './community-tools-widget.component.html',
  styleUrls: ['./community-tools-widget.component.css'],
  providers: [ToolsService]
})
export class CommunityToolsWidgetComponent implements OnInit {
  tools;
  constructor(private toolsWidget: ToolsService) { }

  ngOnInit() {
    this.toolsWidget.getTools().subscribe(data => {
      this.tools = data.Tools;
    });
  }
}
