import { Component, OnInit } from '@angular/core';
  import {FormControl} from '@angular/forms';

@Component({
  selector: 'calvin-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})
export class CreateCommunityComponent implements OnInit {
selectedValue: string;

  visibilities = [
    {value: 'Public-0', viewValue: 'public'},
    {value: 'Private-1', viewValue: 'Private'},
    {value: 'Moderate', viewValue: 'Moderate'}
  ];
  memberCtrl: FormControl;
  filteredmembers: any;

  members = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];
    constructor() {
      this.memberCtrl = new FormControl();
      this.filteredmembers = this.memberCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterMembers(name));
  }
    filterMembers(val: string) {
      return val ? this.members.filter(s => new RegExp(`^${val}`, 'gi').test(s))
               : this.members;
  }
 ngOnInit() {
  }

}
