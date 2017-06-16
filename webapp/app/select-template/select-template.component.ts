import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calvin-select-template',
  templateUrl: './select-template.component.html',
  styleUrls: ['./select-template.component.css']
})
export class SelectTemplateComponent implements OnInit {

   coreActivity = [
    {value: 'Professional', viewValue: 'Professional'},
    {value: 'Travel', viewValue: 'Travel'},
    {value: 'Arts', viewValue: 'Arts'},
    {value: 'Technology', viewValue: 'Technology'},
    {value: 'Business', viewValue: 'Business'},
    {value: 'Science', viewValue: 'Science'},
    {value: 'Education', viewValue: 'Education'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
