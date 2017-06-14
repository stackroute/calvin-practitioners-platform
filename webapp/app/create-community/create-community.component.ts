import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calvin-create-new-community',
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
    
 values = '';
  onKey(value: string) {
    this.values=value;
    console.log(this.values);
    console.log(this.domainname[value]);
    for(let domain in this.domainname[value]) {
      console.log(domain);
      if(domain===this.values)
      {
        console.log(this.values);
        console.log('false');
        return false;
      }
    }
  }


  ngOnInit() {
    


}
}
