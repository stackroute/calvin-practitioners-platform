import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddToolService } from './add-tool.service';
@Component({
  selector: 'calvin-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.css'],
  providers: [AddToolService]
})
export class AddToolComponent implements OnInit {


  actions = [];
  events = [];
  toolaction: String;
  toolgrants: String;
  tooleventname: String;
  eventpayload: String;
  eventDesc: String;
  toolid:String;
  toolname:String;
  tooldesc:String;
  actionFlag = 0;
  eventFlag = 0;

  constructor(private addtoolservice: AddToolService) { }

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
  }
 // this function is to reset the action fileds
  enableAction() {
    this.toolaction = '';
    this.toolgrants = '';
    this.actionFlag = 0;
  }
// this function is to remove seleccted action from list
  remAction() {
    alert(this.toolaction);
    this.actions = this.actions.filter(item => item.name !== this.toolaction);
    console.log(this.actions);
    this.enableAction();
  }

// this function is to add each tool event in arrays
  addEvent() {
    // alert('called:'+this.tooleventname+this.eventpayload+this.eventDesc);
    let obj = {
      name: this.tooleventname.toUpperCase(),
      payload: this.eventpayload.toUpperCase(),
      description: this.eventDesc.toUpperCase()
    };
    this.events.push(obj);
    this.eventFlag = 1;
    // alert(this.events);
  }

  // this function is to remove slected event from the list
  remEvent() {
    alert(this.tooleventname);
    this.events = this.events.filter(item => item.name !== this.tooleventname);
    console.log(this.actions);
    this.enableEvent();
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
    alert('called');
    console.log(form.value);
    let toolobj= {
      toolid:this.toolid.toUpperCase(),
      toolname:this.toolname.toUpperCase(),
      tooldesc:this.tooldesc.toUpperCase(),
      toolAction:this.actions,
      toolEvent: this.events
    };

    console.log(toolobj);
    //  
    // {email: l 
    // '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.
    //...  <-- now
    this.addtoolservice.addTool(toolobj).subscribe(result => {

    });
  }
}
