import { Component, OnInit, Input } from '@angular/core';
import { ToolService } from './community-tool-management.service';
import {MD_DIALOG_DATA} from '@angular/material';
import {MdDialog} from '@angular/material';



@Component({
  selector: 'calvin-community-tool-management',
  templateUrl: './community-tool-management.component.html',
  styleUrls: ['./community-tool-management.component.css'],
  providers:[ ToolService]
})
export class CommunityToolManagementComponent implements OnInit {
  loading: boolean;
    @Input('community') domain: string;
  tools = [];
  constructor(public dialog: MdDialog,private toolservice: ToolService) { }

  ngOnInit() {
    this.loading = true;
    this.toolservice.getTools(this.domain).subscribe(data => {
      this.loading = false;
      this.tools = data;
       console.log(this.tools,this.domain);
  });
}
   openBox(){
     this.dialog.open(CommunityDialogue);
   }

}



@Component({
  selector:'dialogebox',
  templateUrl:'./dialoge.html',
  providers:[ ToolService]
})
export class CommunityDialogue {
}





// <div fxLayoutAlign="column"> 
// <div  fxLayoutAlign="start">
//       Toiol info goes
// </div>
// <div fxLayoutAlign="end">
//    Tool Setting button
// </div>
// </div>