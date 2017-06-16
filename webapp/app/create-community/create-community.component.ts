import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MdDialog} from '@angular/material';


@Component({
 // selector: 'create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})


export class CreateCommunityComponent implements OnInit {

  coreActivity = [
    {value: 'Professional', viewValue: 'Professional'},
    {value: 'Travel', viewValue: 'Travel'},
    {value: 'Arts', viewValue: 'Arts'},
    {value: 'Technology', viewValue: 'Technology'}
    ];

    visibility = [
      {value: 'public', viewValue: 'Public'},
      {value: 'private', viewValue: 'Private'},
      {value: 'moderate', viewValue: 'Moderate'}
    ];

    tags = [
      {value: 'tag-one', viewValue: 'tagone'},
      {value: 'tag-two', viewValue: 'tagtwo' },
      {value: 'tag-three', viewValue: 'tagthree'}
    ];

    userForm = new FormGroup({
      domainName: new FormControl(),
      communityName: new FormControl(),
      coreactivity: new FormControl()
    });

  constructor(public dialog: MdDialog) { }

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
      // console.log(this.userForm.value);
    }


  ngOnInit() { }
}
