import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {MdDialog} from '@angular/material';

import { TemplateBrowserComponent } from '../template-browser/template-browser.component';
import { createCommunityService } from './create-community.service'

@Component({
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})


export class CreateCommunityComponent implements OnInit {

  userForm: FormGroup;

  public tagarray= [];

   coreActivity = [
    {value: 'Professional', viewValue: 'Professional', tool: 'Forum' },
    {value: 'Travel', viewValue: 'Travel', tool: 'quora'},
    {value: 'Arts', viewValue: 'Arts', tool: 'stackoverflow'},
    {value: 'Technology', viewValue: 'Technology', tool: 'quora'},
    {value: 'Business', viewValue: 'Business', tool: 'Forum'},
    {value: 'Science', viewValue: 'Science', tool: 'quora'},
    {value: 'Education', viewValue: 'Education', tool: 'quora'}
  ];


    visibility = [
      {value: 'Public', viewValue: 'Public'},
      {value: 'Private', viewValue: 'Private'},
      {value: 'Moderate', viewValue: 'Moderate'}
    ];

    tags = [
      {value: 'tag-one', viewValue: 'tagone'},
      {value: 'tag-two', viewValue: 'tagtwo' },
      {value: 'tag-three', viewValue: 'tagthree'}
    ];
  constructor(private dialog: MdDialog, private fb: FormBuilder,private newcommunity: createCommunityService) {

    this.createForm();

   }
// reactive form validation for userForm
  createForm() {
        this.userForm = this.fb.group({
          domainName: ['', [Validators.required, Validators.pattern('[a-z.]{8,20}')]],
          communityName: ['', Validators.required],
          Purpose: ['', Validators.required],
          visibility: ['Public', Validators.required],
          // template: ['',Validators.required],
          tagSelection: ['', Validators.required],
          termscondition: ['', Validators.required]
        });
    }

//  check whether the card is clickable or not

 onselect(selectedTemplate: any)
 {
   console.log(selectedTemplate);
   return selectedTemplate;
 }

// bind text box value
    chipValue(tag:any) 
    {
     this.tagarray.push(tag);
     
    }

// submit userForm values

    onsubmit(userdata: any) {
       
       console.log(userdata.value);
    }
// cancel for redirect to userdashboard  

  oncancel() {

  }

// post data through api

     postdata(Purpose,communityName,domainName,tagSelection,termscondition,visibility)
   {
     let domain=String(domainName);
      let value={domain,Purpose,communityName,tagSelection,termscondition,visibility};
      this.newcommunity.postfavdata(value).subscribe(
        (data)=>console.log("Post data"),
        
          error=>alert(error),
          ()=>console.log("data posted successfully")
      );
   } 

  ngOnInit() {
  }
  
}
