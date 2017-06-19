import { Component, OnInit, Input } from '@angular/core';

import { CreateCommunityComponent } from '../create-community/create-community.component';



@Component({
  selector: 'calvin-template-browser',
  templateUrl: './template-browser.component.html',
  styleUrls: ['./template-browser.component.css']
})
export class TemplateBrowserComponent implements OnInit {

  @Input() template; 


  constructor(private community: CreateCommunityComponent ) { }

  ngOnInit() {
  }

}
