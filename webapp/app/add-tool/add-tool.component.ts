import { Component, OnInit , Input,Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AddToolService } from './add-tool.service';
import { MD_DIALOG_DATA, MdDialog, MdDialogRef } from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
@Component({
  selector: 'calvin-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.css'],
  providers: [AddToolService]
})
export class AddToolComponent implements OnInit {
 @Input() Toolid ;
  
  toolForm: FormGroup;
  actionControl: FormControl;
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
  flag=0;
  
   constructor(
    private addtoolservice: AddToolService,
    private dialog: MdDialog,
    private fb: FormBuilder
    ) { 
       this.createForm();
    }

  createForm() {
    this.toolForm = this.fb.group({
      toolid: ['', [Validators.required,Validators.pattern('[a-z0-9.]{4,20}')]],
      toolname: ['', Validators.required],
      avatar: ['',[Validators.required,Validators.pattern('https?://.+')]],
      description: ['',Validators.required],
      purpose: ['', Validators.required],
      toolaction:['', Validators.required],
      toolgrants:['', Validators.required],
      actionDesc:['', Validators.required],
      tooleventname: ['', Validators.required],
      eventpayload:['', Validators.required],
      eventDesc: ['', Validators.required],
      termscondition: ['', Validators.required],
      // termscondition: ['', Validators.required],
      // visibility: ['Public', Validators.required],
      // description: [''],
      // tagCtrl: ['', [Validators.required, Validators.pattern('[a-z]{3,20}')]],
      
      
    });
  }

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
      name: this.toolaction,
      id:this.toolaction+(String(this.actionCounter++)),
      grants: this.toolgrants,
      desc: this.actionDesc,
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
      name: this.tooleventname,
      id:this.tooleventname+(String(this.eventCounter++)),
      metadata: this.eventpayload,
      description: this.eventDesc
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
    // alert(this.tooleventname);
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

  enableSubmit() {

    
    (this.flag===0)?this.flag=1:this.flag=0;

  }

  // this function is to register the tool 
  onsubmit(tooldata:any) {

    // console.log(form.value);
    let actionobj={
        name: this.toolaction,
        id :this.toolaction+(String(this.actionCounter++)),
       grants: this.toolgrants,
       desc: this.actionDesc,
       };
   this.actions.push(actionobj);

    console.log('tool data is ',tooldata);
   let eventobj ={
      name: this.tooleventname,
      id:this.tooleventname+(String(this.eventCounter++)),
      metadata: this.eventpayload,
      description: this.eventDesc
   };
   
   this.events.push(eventobj);

    let toolobj = {
      toolid: tooldata.toolid,
      toolname: tooldata.toolname,
      tooldesc: tooldata.tooldesc,
      toolavatar: tooldata.toolavatar,
      toolpurpose: tooldata.toolpurpose,
      toolAction: this.actions,
      toolEvent: this.events
    };

    console.log("final  object.........",toolobj);
    this.id=this.toolid;
    this.addtoolservice.addTool(toolobj).subscribe(result => {
      console.log('inside add tool response');
      // RESETTING FIELDS after successfully adding tool
      this.events = [];
      this.actions = [];
      this.actionFlag = 0;
      this.eventFlag = 0;
      // form.reset();
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

