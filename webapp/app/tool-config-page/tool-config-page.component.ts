import { Component, OnInit, Input } from '@angular/core';
import { ToolConfigService } from './tool-config-page.service';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { MdCheckboxModule } from '@angular/material';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { UserInfoService } from '../core/user-info.service';

// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'calvin-tool-config-page',
  templateUrl: './tool-config-page.component.html',
  styleUrls: ['./tool-config-page.component.css'],
  providers: [ToolConfigService]
})
export class ToolConfigPageComponent implements OnInit {
  constructor(private userinfoservice:UserInfoService,private config: ToolConfigService, private router: ActivatedRoute, private dialog: MdDialog) {
  }


  toolObj;
  toolActions = [];
  toolEvents = [];
  eventname;
  data = [];
  events;
  toolname;
  toolid;
  activityEvent;
  toolurl;
  // domain = "wave15";
  // username = "ceanstackdev@gmail.com";
  domainName;
  user:{};
  flag=0;
  username;
  toolavatar;
  purpose;
  Events;
  selectedEvent = [];
  selectedEvent1 = [];
url:any;
//console.log(url);
  eventMappings = new Map();
  
 
 
 
  ngOnInit() {
    // console.log("tool-config-page",this.domain1);
    this.userinfoservice.getUserDetail((userdetails) => {
     // this.user = userdetails;
     this.username = userdetails.username;
     this.flag = 1;
   });
   
    this.toolid = this.router.snapshot.params['toolid'];
    this.domainName = this.router.snapshot.params['domain'];
    //getToolinfo
    this.config.getTools(this.router.snapshot.params['toolid']).subscribe(data => {
      this.toolObj = data[0];           
      console.log("Got tool data ", this.toolObj);
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

        console.log("events from getttoolllsssss", data);
      });
     //get communityinfo
      this.config.getEvents().subscribe(data => {
       this.events = data;
      //  this.states = this.events.actortype;
      //  this.activitytype = this.events.activitytype;
      //  this.objecttype = this.events.objecttype;
      //   console.log("community event",data);
       console.log('my actor type------', this.events.actortype);
       console.log('my activity type------', this.events.activitytype);
       console.log('my object type------', this.events.object);
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
    // console.log("Mappings: ", JSON.stringify(Array.from(this.eventMappings.values())));
  
    let obj = [];
//console.log("rerrrrre",toolinfo.toolurl);
    const mappedToolEventObj = {
      toolname: this.toolid,
      avatar: (this.toolObj.toolavatar || ''), 
      toolurl:toolinfo.value.toolurl,
     // domain: this.domainName,
      username:this.username, 
      purpose: (this.toolObj.purpose || ''),   
      actions:["actions"],
      events:Array.from(this.eventMappings.values())
      
    
    };
    //console.log("Mappings: ", mappedToolEventObj,JSON.stringify(Array.from(this.eventMappings.values())));
    console.log('final datra we are sending is ',JSON.stringify(mappedToolEventObj));
    //console.log('toolss eventsssssss',this.Events);
    this.config.postTools(this.domainName,this.toolid,mappedToolEventObj).subscribe(
      (data) => this.openDialog());
      //(data) => console.log(this.data));
  }


  openDialog() {
   // console.log('my domain page', this.domainName);
    let dialogRef = this.dialog.open(DialogResultDialog);
  }
  
  ////check box
  toggle(eventId, eventName, eventDescription, $event) {
    this.eventMappings.set(eventId, {eventid: eventId, eventname: eventName, description: eventDescription, metadata: ""});

  }
  
  onSelectMapType(eventId, mappingType, $event) {
    // console.log("*** Selected event ", eventName, " | ", mappingType, " | ", $event);
    let eventData = this.eventMappings.get(eventId);
    eventData[mappingType] = $event;
    this.eventMappings.set(eventId, eventData);
  }
  
  select(coomunityEvent) {

    console.log("cevent based on community",coomunityEvent);
     
    // this.config.getEvents().subscribe(data => {
    //    this.events = data;
      //   console.log("community event from dropdown",data);
      // });
    //console.log(value);
    const value=[];
      this.events.communityactivityevent=coomunityEvent;
      
      console.log('this.event',this.events);
      this.selectedEvent1.push(this.events.communityactivityevent);
      console.log('over all obejct uis',this.selectedEvent1);
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
  // routeToProfile() {
  //   this.router.navigate(['/app/Home/']);
  // }
}
//    @Component({
//   selector: 'toolsPosted',
//   templateUrl: 'toolsPosted.html',
// })
// export class toolsPosted {
// constructor(private router: Router) { }
// }