import { Component, OnInit, Input,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddToolService } from './add-tool.service';
import { MdDialog,MD_DIALOG_DATA,MdDialogRef } from '@angular/material';
@Component({
  selector: 'calvin-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.css'],
  providers: [AddToolService]
})
export class AddToolComponent implements OnInit {

  actions = [];
  events = [];
  id: String;
  toolaction: String;
  toolgrants: String;
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

  constructor(private addtoolservice: AddToolService,
    private dialog: MdDialog) { }

  ngOnInit() {

  }

  // this function is to add each tool action in array
  AddAction() {
    let obj = {
      name: this.toolaction.toUpperCase(),
      grants: this.toolgrants.toUpperCase()
    };
    this.actions.push(obj);
    this.actionFlag = 1;
    this.toolaction = '';
    this.toolgrants = '';
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
  addEvent() {
    let obj = {
      name: this.tooleventname.toUpperCase(),
      payload: this.eventpayload.toUpperCase(),
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
    this.id = this.toolid;
    console.log('--------tolid.......' + this.id);
    let toolobj = {
      toolid: this.toolid,
      toolname: this.toolname.toUpperCase(),
      tooldesc: this.tooldesc.toUpperCase(),
      toolavatar: this.toolavatar,
      toolAction: this.actions,
      toolEvent: this.events
    };

    // console.log(toolobj);

    this.addtoolservice.addTool(toolobj).subscribe(result => {
      console.log('inside add tool response');
      // RESETTING FIELDS after successfully adding tool
      this.events = [];
      this.actions = [];
      this.actionFlag = 0;
      this.eventFlag = 0;
      form.reset();
      // alert('data'+result);
      this.dialog.open(SucessDialog,{
        data:this.id
      }); // opening Dialogue to show success message
    })

  }
}

@Component({
  selector: 'sucsess-dialog',
  templateUrl: 'success-dialog.html',
})
export class SucessDialog {

toolid:String;
  constructor(private router: Router,
   @Inject(MD_DIALOG_DATA) public data: any,
      public dialogRef: MdDialogRef<SucessDialog>) {
      this.toolid = data;
  }
  navigateTool() {
    alert('will navigate'+this.toolid);
   
      // This is not the recommended way of accessing data passed to the dialog, hence commenting, but for example sake keeping it
      // Refer https://github.com/angular/material2/issues/4002
      // console.log("Data in the dialog is: ", this.dialogRef._containerInstance.dialogConfig.data);
    
    console.log('................' + this.toolid);
    this.router.navigate([`/app/toolpage/${this.toolid}`]);
  }

}

