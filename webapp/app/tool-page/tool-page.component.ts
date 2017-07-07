import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetToolService } from './get-tool.service';

@Component({
  selector: 'calvin-tool-page',
  templateUrl: './tool-page.component.html',
  styleUrls: ['./tool-page.component.css'],
  providers: [GetToolService]
})
export class ToolPageComponent implements OnInit {
  toolid:String;
  toolinfo:any;
  status=0;
  constructor(private route: ActivatedRoute, private toolservice: GetToolService) { }

  ngOnInit() {
    console.log('toolid is : '+this.route.snapshot.params['toolid'])
    this.toolid=this.route.snapshot.params['toolid'];
    this.toolservice.getTool(this.toolid).subscribe((toolinfo)=>{
        this.toolinfo=toolinfo;
        console.log('tool info....',this.toolinfo);
        this.status=1;
    });
  }

}
