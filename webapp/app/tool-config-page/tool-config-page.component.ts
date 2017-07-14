import { Component, OnInit } from '@angular/core';
import { ToolConfigService } from './tool-config-page.service';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl} from '@angular/forms';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import {MdCheckboxModule} from '@angular/material';

@Component({
  selector: 'calvin-tool-config-page',
  templateUrl: './tool-config-page.component.html',
  styleUrls: ['./tool-config-page.component.css'],
  providers: [ToolConfigService]
})
export class ToolConfigPageComponent implements OnInit {

  constructor(private config:ToolConfigService,private router:ActivatedRoute ) { }
  allTool=[];
  toolActions=[];
  ngOnInit() {

    let url=this.router.snapshot.params['toolid'];
    //getToolinfo
    this.config.getTools(this.router.snapshot.params['toolid']).subscribe(data => {
    this.allTool=data;
  });
   //getToolActions
   console.log("toolactions",url);
   this.config.getToolActions(this.router.snapshot.params['toolid'])
   .subscribe(data => {
     this.toolActions=data;
     console.log("actions",data);
   });
}
}