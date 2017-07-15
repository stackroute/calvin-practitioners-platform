import { Component, OnInit, Input } from '@angular/core';
import { ToolsService } from './community-tools-widget.service';
// import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'calvin-community-tools-widget',
  templateUrl: './community-tools-widget.component.html',
  styleUrls: ['./community-tools-widget.component.css'],
  providers: [ToolsService]
})
export class CommunityToolsWidgetComponent implements OnInit {

  @Input('community') domain: string;
  tools = [];
  constructor(private toolsWidget: ToolsService) { }

  ngOnInit() {
    this.toolsWidget.getTools(this.domain).subscribe(res => {
      this.tools = res;
      console.log("toollllsssss",this.domain)
    });

  }
}
