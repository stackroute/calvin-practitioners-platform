import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {MdDialog} from '@angular/material';

import { TemplateBrowserComponent } from '../template-browser/template-browser.component';
import { ManageCommunityComponent } from '../manage-community/manage-community.component';


@Component({
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})


export class CreateCommunityComponent implements OnInit {

  userForm: FormGroup;

  tag=[{}];

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



  constructor(private dialog: MdDialog, private fb: FormBuilder) {
    this.createForm();
   }

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

 

// sample method to display tag name
    flagDetails(tag) {
      // console.log(tag);
    }
// open dialog
   openDialog() {
    this.dialog.open(CreateCommunityComponent);
  }

// sample code for form validation

    onsubmit(userdata: any) {
       console.log(userdata.value);
    }
// bind text box value
    chipvalue(tag: any) {
     if(tag) {
       this.tag.push(tag.value);
     }
            console.log(tag.value);

    }

  ngOnInit() { }
}
