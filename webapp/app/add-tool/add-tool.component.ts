import { Component, OnInit , Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddToolService } from './add-tool.service';
import { MdDialog } from '@angular/material';
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
  purpose=[];
  uniquePurpose=[];
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
    let toolobj = {
      toolid: this.toolid.toUpperCase(),
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
      this.dialog.open(SucessDialog); // opening Dialogue to show success message
    })

  }
}

@Component({
  selector: 'sucsess-dialog',
  templateUrl: 'success-dialog.html',
})
export class SucessDialog {

  constructor(private router: Router) { }
  navigateTool() {
    // alert('hi will navigate to tool');
    this.router.navigate(['/app/toolpage/:toolid']);
  }

}

