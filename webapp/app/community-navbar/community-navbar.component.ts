import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calvin-community-navbar',
  templateUrl: './community-navbar.component.html',
  styleUrls: ['./community-navbar.component.css']
})
export class CommunityNavbarComponent implements OnInit {

  constructor() { }
      setSaving( element, text ) {
  if ( element.textContent === 'JOIN') {
  element.textContent = text;
     }else {
       element.textContent = 'JOIN';
    }}
  ngOnInit() {
  }

}
