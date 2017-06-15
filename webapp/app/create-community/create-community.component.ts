import { Component, OnInit } from '@angular/core';


@Component({
 // selector: 'create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})
export class CreateCommunityComponent implements OnInit {

  constructor() { }

  coreactivity = [
    {value: 'Professional', viewValue: 'Professional'},
    {value: 'Travel', viewValue: 'Travel'},
    {value: 'Arts', viewValue: 'Arts'},
    {value: 'Technology', viewValue: 'Technology'}
  ];

  domainname=[
    {value: 'Professional', viewValue: 'Professional'},
    {value: 'Travel', viewValue: 'Travel'},
    {value: 'Arts', viewValue: 'Arts'},
    {value: 'Technology', viewValue: 'Technology'},
    {value:'digital',viewValue:'digital'}
    ]

  ngOnInit() { }
}
