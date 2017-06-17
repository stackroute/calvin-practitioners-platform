import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {MdDialog} from '@angular/material';

import { TemplateBrowserComponent } from '../template-browser/template-browser.component';


@Component({
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})


export class CreateCommunityComponent implements OnInit {

  userForm: FormGroup;

  coreActivity = [
    {value: 'Professional', viewValue: 'Professional'},
    {value: 'Travel', viewValue: 'Travel'},
    {value: 'Arts', viewValue: 'Arts'},
    {value: 'Technology', viewValue: 'Technology'}
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
          // visibility: ['', Validators.required],
          tagSelection: ['', Validators.required],
          // termsCondition: ['', Validators.required]
        });
    }
//  check whether the card is clickable or not

   navigate(thing) {
    //  console.log(thing);
    }

// sample method to display tag name
    flagDetails(tag) {
      // console.log(tag);
    }
// open dialog
   openDialog() {
    this.dialog.open(CreateCommunityComponent);
  }

// sample code for form validation

    onsubmit() {
       console.log(this.userForm.value);
    }
// bind text box value
    onKey(tag: string) {
        console.log(tag);
    }
// display drop-down value
    selectedCoreActivity(core: any) {
      return core;
}


  ngOnInit() { }
}
