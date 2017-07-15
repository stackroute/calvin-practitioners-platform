import { Component, OnInit } from '@angular/core';
import { ToolConfigService } from './tool-config-page.service';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl} from '@angular/forms';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import {MdCheckboxModule} from '@angular/material';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'calvin-tool-config-page',
  templateUrl: './tool-config-page.component.html',
  styleUrls: ['./tool-config-page.component.css'],
  providers: [ToolConfigService]
})
export class ToolConfigPageComponent implements OnInit {

  constructor(private config:ToolConfigService,private router:ActivatedRoute, private dialog: MdDialog) { }
  allTool=[];
  toolActions=[];
  toolEvents=[];
  data=[];
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
   postTools(dmain,data)

     {
        this.config.postTools(this.router.snapshot.params['toolid'],this.data).subscribe((data) => this.openDialog());

     }

 openDialog()
 
  {

    this.dialog.open(toolsPosted);
    }
}

   

   //getToolEvents
  //  this.config.getToolEvents(this.router.snapshot.params['toolid'])
  //  .subscribe(data => {
  //    this.toolEvents=data;
  //    console.log("actions",data);
  //  });

   @Component({
  selector: 'toolsPosted',
  templateUrl: 'toolsPosted.html',
})
export class toolsPosted {
constructor(private router: Router) { }
 


foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ]
};
