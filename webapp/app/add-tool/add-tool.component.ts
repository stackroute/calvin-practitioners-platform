import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'calvin-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.css']
})
export class AddToolComponent implements OnInit {


  actions = [];
  events = [];
  toolaction: String;
  toolgrants: String;
  actionFlag = 0;
  constructor() { }

  ngOnInit() {

  }


  focusOutFunction() {

    //  alert('hi'+this.toolaction);  
    let obj = {
      name: this.toolaction,
      grants: this.toolgrants
    };
    this.actions.push(obj);
    this.actionFlag = 1;
  }

  enableAction() {
    this.toolaction = '';
    this.toolgrants = '';
    this.actionFlag = 0;
  }

  remAction() {
    alert(this.toolaction);
     this.actions = this.actions.filter(item => item.name !== this.toolaction);
    console.log(this.actions);
  }

  registerTool(form: NgForm) {
    alert('called');
    console.log(form.value);
       
      //  
     // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.
   //...  <-- now

 }
}
