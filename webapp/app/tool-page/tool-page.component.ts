import { Component, OnInit } from '@angular/core';
import { ToolPageService } from './tool-page.service';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'calvin-tool-page',
  templateUrl: './tool-page.component.html',
  styleUrls: ['./tool-page.component.css'],
  providers: [ ToolPageService ]
})
export class ToolPageComponent implements OnInit {
  toolid: String;
  toolinfo:any;
  constructor( 
  private toolpageservice: ToolPageService, 
  private router:Router,
  private activeroute: ActivatedRoute
  ) { }

  ngOnInit() {
        this.toolid= this.activeroute.snapshot.params['toolid'];
      this.toolpageservice.getToolinfo(this.toolid).subscribe(result=>{
        this.toolinfo=result;
        console.log('tooinfo is :',this.toolinfo);
      });
  }

}
