// import { Component, OnInit, Input } from '@angular/core';
// import { ToolConfigService } from './tool-config-page.service';
// import { FormGroup, Validators, FormBuilder, AbstractControl, FormControl } from '@angular/forms';
// import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
// import { MdCheckboxModule } from '@angular/material';
// import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
// import { UserInfoService } from '../core/user-info.service';
// // import 'rxjs/add/operator/startWith';
// // import 'rxjs/add/operator/map';
// @Component({
//   selector: 'calvin-tool-config-page',
//   templateUrl: './tool-config-page.component.html',
//   styleUrls: ['./tool-config-page.component.css'],
//   providers: [ToolConfigService]
// })
// export class ToolConfigPageComponent implements OnInit {

//   constructor(private userinfoservice:UserInfoService,private config: ToolConfigService, private router: ActivatedRoute, private dialog: MdDialog) { 
//     // this.stateCtrl = new FormControl();
//     // this.filteredStates = this.stateCtrl.valueChanges
//     //     .startWith(null)
//     //     .map(name => this.filterStates(name));
//   }
//   allTool = [];
//   toolActions = [];
//   toolEvents = [];
//   data = [];
//   event :any;
//   toolid;
  
//   domainName;
//   user:{};
//   flag=0;
//   username;
//   selectedEvent = [];
//   events;
//     //  stateCtrl: FormControl;
//     //  filteredStates: any;


//   ngOnInit() {
//     // console.log("tool-config-page",this.domain1);
//     this.userinfoservice.getUserDetail((userdetails) => {
//      //this.user = userdetails;
//      this.username = userdetails.username;
//      //console.log("user detalsss",this.user);
//      console.log("",this.username);
//      this.flag = 1;
//    });
   
//     this.toolid = this.router.snapshot.params['toolid'];
//     this.domainName = this.router.snapshot.params['domain'];


//     //getToolinfo
//     this.config.getTools(this.router.snapshot.params['toolid']).subscribe(data => {
//       this.allTool = data;


//     });
    

//     //getToolActions
//     console.log("toolactions", this.toolid);
//     this.config.getToolActions(this.router.snapshot.params['toolid'])
//       .subscribe(data => {
//         this.toolActions = data;
//         console.log("actions", data);
//       });
//     //getToolEvents
//      this.config.getEvents().subscribe(data => {
//       this.events = data;
//        console.log("eventsssss",this.events.actortype);
//       });
//   }

// foods = [
//    { value: 'steak-0', viewValue: 'git' },
//    { value: 'pizza-1', viewValue: 'slack' },
//    { value: 'tacos-2', viewValue: 'calvin' }
//  ];

//   getTooleventinfo(eventname){
//         console.log('inside get tool event info',eventname);
//         let foundevent,flag=0;
//        this.toolEvents.forEach((event)=>{
//          console.log('evvent is ',event);

//            if(event.name===eventname){
//              console.log('found match',event);
//              foundevent=event;
//              flag=1;
//            }
//            if(flag===1){
//              return foundevent;
//            }
//        });
//   }

//   //  filterStates(val: string) {
//   //    console
//   //   return val ? this.events.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
//   //              : this.events;
//   // }

//   onSubmit(toolinfo: any) {

//     // const newToolInfo=toolinfo.value;
//     // console.log('toolinfo',newToolInfo);  
//     let obj = [];

//     // obj.push(this.username);
//     // obj.push(this.toolid);
//     const mappedToolEventObj = {
//       toolid: this.toolid,
//       domain: this.domainName,
//       username:this.username,
      
//       events: this.selectedEvent
//     };
    
//     // this.domain = this.config.getDomain();
//     // console.log('domain is .....', this.domainName);
//     //  console.log('domain is .....',this.domainName);
//     console.log('final datra we are sending is ',mappedToolEventObj);

//     this.config.postTools(this.domainName, mappedToolEventObj).subscribe(
//       (data) => this.openDialog());
//   }
//   openDialog() {
//     console.log('my domain page', this.domainName);
//     let dialogRef = this.dialog.open(DialogResultDialog, {
//       data: this.domainName
//     })

//   }

  
//   ////check box
//   toggle(selectedEvent) {
//     //console.log(a);
//    let flag=0;

//     this.toolEvents.forEach((event)=>{
//            if(event.name===selectedEvent){
//                this.event=event;
//                flag=1;
//            }
//     });
//     // this.event=this.getTooleventinfo(selectedEvent);
//     console.log('this i event is ',this.event); 
    
//   }

//   //dropdown
//   select(coomunityEvent) {
//          console.log(coomunityEvent)
//           this.config.getEvents().subscribe(data => {
//       this.events = data;
//        console.log("eventsssss",this.events);
//           });

//     //console.log(value);
//       // this.event.communityactivityevent=coomunityEvent;
//       // console.log('this.event',this.event);
//       // this.selectedEvent.push(this.event);
//       // console.log('over all obejct uis',this.selectedEvent);
//   }
  
//   //  dashboard(){
//   //    console.log("domain name",this.domain);
//   //    this.router.navigate([`app/communityDashBoard/${this.domain}`]);
//   //  }
// }
// @Component({
//   selector: 'toolsPosted',
//   templateUrl: 'toolsPosted.html',
// })

// export class DialogResultDialog {
//   constructor(public dialogRef: MdDialogRef<DialogResultDialog>, private router: Router) { }
//   routeToProfile() {
//     this.router.navigate(['/app/Home/']);
//   }
// }




import { Component, OnInit, Input } from '@angular/core';
import { ToolConfigService } from './tool-config-page.service';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { MdCheckboxModule } from '@angular/material';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { UserInfoService } from '../core/user-info.service';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'calvin-tool-config-page',
  templateUrl: './tool-config-page.component.html',
  styleUrls: ['./tool-config-page.component.css'],
  providers: [ToolConfigService]
})
export class ToolConfigPageComponent implements OnInit {
  constructor(private userinfoservice:UserInfoService,private config: ToolConfigService, private router: ActivatedRoute, private dialog: MdDialog) {

    this.stateCtrl = new FormControl();    
    this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this. filterActorType(name));

  this.stateActive = new FormControl();
    this.filteredActivity = this.stateActive.valueChanges
        .startWith(null)
        .map(name => this. filterActivityType(name));

  this.stateObject =new FormControl();
        this.filteredObject = this.stateObject.valueChanges
        .startWith(null)
        .map(name => this. filterObjectType(name));
   }
 stateCtrl: FormControl;
 stateActive: FormControl;
 stateObject: FormControl;
  filteredStates: any;
  filteredActivity: any;
  filteredObject: any;


  allTool = [];
  toolActions = [];
  toolEvents = [];
  data = [];
  events;
  toolid;
  // domain = "wave15";
  // username = "ceanstackdev@gmail.com";
  domainName;
  user:{};
  flag=0;
  username;
  selectedEvent = [];
  states = [];
  activitytype=[];
  objecttype=[];

  // @Input()  domain1:any;
 
 filterActorType(val) {
   console.log('actortype*****', this.events.actortype);
    return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.states;
               
  }
  filterActivityType(val) {
   console.log('activity*****', this.events.activitytype);
    return val ? this.activitytype.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.activitytype;
               
  }
  filterObjectType(val) {
   console.log('object*****', this.events.objecttype);
    return val ? this.objecttype.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.objecttype;
               
  }
 
 
 
 
  ngOnInit() {
    // console.log("tool-config-page",this.domain1);
    this.userinfoservice.getUserDetail((userdetails) => {
     //this.user = userdetails;
     this.username = userdetails.username;
     //console.log("user detalsss",this.user);
     console.log("",this.username);
     this.flag = 1;
   });
   
    this.toolid = this.router.snapshot.params['toolid'];
    this.domainName = this.router.snapshot.params['domain'];
    //getToolinfo
    this.config.getTools(this.router.snapshot.params['toolid']).subscribe(data => {
      this.allTool = data;
    });
    //getToolActions
    console.log("toolactions", this.toolid);
    this.config.getToolActions(this.router.snapshot.params['toolid'])
      .subscribe(data => {
        this.toolActions = data;
        console.log("actions", data);
      });
    //getToolEvents
    this.config.getToolEvents(this.router.snapshot.params['toolid'])
      .subscribe(data => {
        this.toolEvents = data;
        console.log("events", data);
      });
     //get communityinfo
      this.config.getEvents().subscribe(data => {
       this.events = data;
       this.states = this.events.actortype;
       this.activitytype = this.events.activitytype;
       this.objecttype = this.events.objecttype;
      //   console.log("community event",data);
      //  console.log('my actor type------', this.states);
      //  console.log('my activity type------', this.activitytype);
      //  console.log('my object type------', this.objecttype);


      });
      // console.log('actortype*****', this.events.actortype);
  }






  getTooleventinfo(eventname){
        console.log('inside get tool event info',eventname);
        let foundevent,flag=0;
       this.toolEvents.forEach((event)=>{
         console.log('evvent is ',event);
           if(event.name===eventname){
             console.log('found match',event);
             foundevent=event;
             flag=1;
           }
           if(flag===1){
             return foundevent;
           }
       });
  }
  onSubmit(toolinfo: any) {
    // const newToolInfo=toolinfo.value;
    // console.log('toolinfo',newToolInfo);  
    let obj = [];
    // obj.push(this.username);
    // obj.push(this.toolid);
    const mappedToolEventObj = {
      toolid: this.toolid,
      domain: this.domainName,
      username:this.username,
      
      events: this.selectedEvent
    };
    
    // this.domain = this.config.getDomain();
    // console.log('domain is .....', this.domainName);
    //  console.log('domain is .....',this.domainName);
    console.log('final datra we are sending is ',mappedToolEventObj);
    this.config.postTools(this.domainName, mappedToolEventObj).subscribe(
      (data) => this.openDialog());
  }
  openDialog() {
    console.log('my domain page', this.domainName);
    let dialogRef = this.dialog.open(DialogResultDialog, {
      data: this.domainName
    })
  }
  foods = [
    { value: 'steak-0', viewValue: 'git' },
    { value: 'pizza-1', viewValue: 'slack' },
    { value: 'tacos-2', viewValue: 'calvin' }
  ];
  ////check box
  toggle(selectedEvent) {
    //console.log(a);
   let flag=0;
    this.toolEvents.forEach((event)=>{
           if(event.name===selectedEvent){
               this.events=event;
               flag=1;
           }
    });
    // this.event=this.getTooleventinfo(selectedEvent);
   // console.log('this i event is ',this.events); 
    
  }
  //dropdown
  select(coomunityEvent) {

    console.log("cevent based on community",coomunityEvent);
    this.config.getEvents().subscribe(data => {
       this.events = data;
        console.log("community event from dropdown",data);
      });
    //console.log(value);
      // this.events.communityactivityevent=coomunityEvent;
      // console.log('this.event',this.events);
      // this.selectedEvent.push(this.events);
      // console.log('over all obejct uis',this.selectedEvent);
  }
  
  //  dashboard(){
  //    console.log("domain name",this.domain);
  //    this.router.navigate([`app/communityDashBoard/${this.domain}`]);
  //  }
}
@Component({
  selector: 'toolsPosted',
  templateUrl: 'toolsPosted.html',
})
export class DialogResultDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultDialog>, private router: Router) { }
  routeToProfile() {
    this.router.navigate(['/app/Home/']);
  }
}
//    @Component({
//   selector: 'toolsPosted',
//   templateUrl: 'toolsPosted.html',
// })
// export class toolsPosted {
// constructor(private router: Router) { }
// }
