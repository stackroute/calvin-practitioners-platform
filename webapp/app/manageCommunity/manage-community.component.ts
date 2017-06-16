import { Component, OnInit } from '@angular/core';
  import {FormControl} from '@angular/forms';
  import {MdDialog} from '@angular/material';

@Component({
  // selector: 'calvinManagecommunity',
  templateUrl: './manage-community.component.html',
  styleUrls: ['./manage-community.component.css']
})
export class ManageCommunityComponent implements OnInit {
  selectedValue: string;

  folders = [{
      name: 'Kavipriya',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Nikita',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Kiran',
      updated: new Date('1/28/16'),
    }];

  constructor() {}
ngOnInit() { }

}
