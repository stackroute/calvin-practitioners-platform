import { Component, OnInit } from '@angular/core';
import { ToolPageService } from './tool-page.service';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'calvin-tool-page',
  templateUrl: './tool-page.component.html',
  styleUrls: ['./tool-page.component.css'],
  providers: [ToolPageService]
})
export class ToolPageComponent implements OnInit {
  toolid: String;
  toolinfo: any;
  flag = 0;
  constructor(
    private toolpageservice: ToolPageService,
    private router: Router,
    private activeroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.toolid = this.activeroute.snapshot.params['toolid'];
    this.toolpageservice.getToolinfo(this.toolid).subscribe(result => {
      let body = result.json();
      // console.log('body is ',body);
      this.toolinfo = body.data || body;
      console.log('tooinfo is :', this.toolinfo);
      this.toolinfo = this.toolinfo[0];
      this.flag = 1;
    });
  }

}
