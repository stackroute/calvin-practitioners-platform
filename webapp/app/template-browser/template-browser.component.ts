import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { CreateCommunityComponent } from '../create-community/create-community.component';



@Component({
  selector: 'calvin-template-browser',
  templateUrl: './template-browser.component.html',
  styleUrls: ['./template-browser.component.css']
})
export class TemplateBrowserComponent implements OnInit {

  count: 0;

  @Input() template;

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();




  constructor(private community: CreateCommunityComponent ) { }

  selectcore(core: any) {
    this.notify.emit(core.value);
  }

  ngOnInit() {
  }

}
