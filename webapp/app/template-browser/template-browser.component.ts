import { Component, OnInit } from '@angular/core';

import { CreateCommunityComponent } from '../create-community/create-community.component';

@Component({
  selector: 'calvin-template-browser',
  templateUrl: './template-browser.component.html',
  styleUrls: ['./template-browser.component.css']
})
export class TemplateBrowserComponent implements OnInit {

  coreActivity = [
    {value: 'Professional', viewValue: 'Professional'},
    {value: 'Travel', viewValue: 'Travel'},
    {value: 'Arts', viewValue: 'Arts'},
    {value: 'Technology', viewValue: 'Technology'},
    {value: 'Business', viewValue: 'Business'},
    {value: 'Science', viewValue: 'Science'},
    {value: 'Education', viewValue: 'Education'}
  ];


  constructor(private community: CreateCommunityComponent ) { }

  ngOnInit() {
  }

}
