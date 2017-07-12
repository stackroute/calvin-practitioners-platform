import { Component, OnInit , Input,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddToolService } from './add-tool.service';
import { MD_DIALOG_DATA, MdDialog, MdDialogRef } from '@angular/material';
@Component({
  selector: 'calvin-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.css'],
  providers: [AddToolService]
})
export class AddToolComponent implements OnInit {
 @Input() Toolid ;

  actions = [];
  events = [];
  toolaction: String;
  toolgrants: String;
  actionDesc: String;
  toolpurpose:String;
  tooleventname: String;
  eventpayload: String;
  eventDesc: String;
  toolid: String;
  toolname: String;
  toolavatar: String;
  tooldesc: String;
  toc: any;
  actionFlag = 0;
  eventFlag = 0;
  actionCounter=0;
  eventCounter=0;
  purpose=[];
  uniquePurpose=[];
  id;
  constructor(private addtoolservice: AddToolService,
    private dialog: MdDialog) { }

  ngOnInit() {
     this.addtoolservice.getTemplates()
    .subscribe(
    data => { this.purpose= data;
      console.log('JSON value', data);
      const purposeList = [new Set(data.map( item => item.purpose))];
      const myArray = Array.from(purposeList);
      this.uniquePurpose =  Array.from(myArray[0]);
      console.log('unique array',this.uniquePurpose);
    },
    error => console.log(error),
    () => console.log('finished')
    );


  }

  // this function is to add each tool action in array
  AddAction() {

    console.log('add action called');

    let obj = {
      name: this.toolaction.toUpperCase(),
      id:this.toolaction+(String(this.actionCounter++)),
      grants: this.toolgrants.toUpperCase(),
      desc: this.actionDesc.toUpperCase(),
    };
    console.log('obj',obj);
    this.actions.push(obj);
    this.actionFlag = 1;
    this.toolaction = '';
    this.toolgrants = '';
    this.actionDesc='';
  }
  // this function is to reset the action fileds
  enableAction() {
    this.toolaction = '';
    this.toolgrants = '';
    this.actionFlag = 0;
  }
  // this function is to remove seleccted action from list
  remAction(actionname) {
    // alert(this.toolaction);

    this.actions = this.actions.filter(item => item.name !== actionname);
    console.log(this.actions);
    if (this.actions.length === 0) {
      this.enableAction();
    }
  }

  // this function is to add each tool event in arrays
  AddEvent() {
    const eventCounter=0;
    let obj = {
      name: this.tooleventname.toUpperCase(),
      id:this.tooleventname+(String(this.eventCounter++)),
      metadata: this.eventpayload.toUpperCase(),
      description: this.eventDesc.toUpperCase()
    };
    this.events.push(obj);
    this.eventFlag = 1;
    // alert(this.events);
    this.tooleventname = '';
    this.eventDesc = '';
    this.eventpayload = '';
  }

  // this function is to remove selected event from the list
  remEvent(eventname) {
    alert(this.tooleventname);
    this.events = this.events.filter(item => item.name !== eventname);
    console.log(this.actions);
    if (this.events.length === 0) {
      this.enableEvent();
    }
  }

  // this function is to reset the event fields
  enableEvent() {
    this.tooleventname = '';
    this.eventpayload = '';
    this.eventDesc = '';
    this.eventFlag = 0;
  }

  // this function is to register the tool 
  registerTool(form: NgForm) {
    console.log(form.value);
    let actionobj={
        name: this.toolaction.toUpperCase(),
        id :this.toolaction+(String(this.actionCounter++)),
      grants: this.toolgrants.toUpperCase(),
      desc: this.actionDesc.toUpperCase(),
    };
   this.actions.push(actionobj);
   let eventobj ={
      name: this.tooleventname.toUpperCase(),
      id:this.tooleventname+(String(this.eventCounter++)),
      metadata: this.eventpayload.toUpperCase(),
      description: this.eventDesc.toUpperCase()
   };

   this.events.push(eventobj);

    let toolobj = {
      toolid: this.toolid,
      toolname: this.toolname.toUpperCase(),
      tooldesc: this.tooldesc.toUpperCase(),
      toolavatar: this.toolavatar,
      toolpurpose: this.toolpurpose,
      toolAction: this.actions,
      toolEvent: this.events
    };

    console.log(toolobj);
    this.id=this.toolid;
    this.addtoolservice.addTool(toolobj).subscribe(result => {
      console.log('inside add tool response');
      // RESETTING FIELDS after successfully adding tool
      this.events = [];
      this.actions = [];
      this.actionFlag = 0;
      this.eventFlag = 0;
      form.reset();
      // alert('data'+result);

      // opening Dialogue to show success message
      this.dialog.open(SucessDialog, {
      data:this.id
    });
    });

  }
}

@Component({
  selector: 'sucsess-dialog',
  templateUrl: 'success-dialog.html',
})
export class SucessDialog {
  
  toolid;
  constructor(  private router: Router, 
  @Inject(MD_DIALOG_DATA) public data: any, 
  public dialogRef: MdDialogRef<AddToolComponent>) {
   this.toolid=data;
   }
  navigateTool() {
    alert('hi will navigate to tool'+`/app/toolpage/${this.toolid}`);
    this.router.navigate([`/app/toolpage/${this.toolid}`]);
  }

}

