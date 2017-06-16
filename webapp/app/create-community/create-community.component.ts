import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

    userForm = new FormGroup({
      domainName: new FormControl(),
      communityName: new FormControl(),
      coreactivity: new FormControl()
    });

  constructor() { }

//  check whether the card is clickable or not

   navigate(thing) {
     alert(thing);
    }
// sample code for form validation

    onsubmit() {
      console.log(this.userForm.value);
    }

  ngOnInit() { }
}
