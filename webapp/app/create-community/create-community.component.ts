import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { MdDialog } from '@angular/material';
import { Route, Router } from '@angular/router';


import { TemplateBrowserComponent } from '../template-browser/template-browser.component';
import { NewcommunityDialogboxComponent } from '../newcommunity-dialogbox/newcommunity-dialogbox.component';
import { CreateCommunityService } from './create-community.service';

@Component({
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css'],
  providers: [CreateCommunityService],
})

export class CreateCommunityComponent implements OnInit {

  userForm: FormGroup;

  public tagarray = [];  // to insert chip value from textfield

  value: string; // to store selected template value

  visibility = [
  {'value': 'Public', 'viewValue': 'Public'},
  {'value': 'Private', 'viewValue': 'Private'},
  {'value': 'Moderate', 'viewValue': 'Moderate'}
  ];

  constructor(private fb: FormBuilder, private newcommunity: CreateCommunityService, public dialog: MdDialog, private router: Router) {
    this.createForm();
  }


// reactive form validation for userForm
  createForm() {
    this.userForm = this.fb.group({
      domainName: ['', [Validators.required, Validators.pattern('[a-z.]{4,20}')]],
      communityName: ['', Validators.required],
      Purpose: ['', Validators.required],
      visibility: ['Public', Validators.required],
      description: [''],
      // template: ['md',Validators.required],
      tagSelection: ['', Validators.required],
      termscondition: ['', Validators.required]
    });
  }

//  check whether the card is clickable or not
onselect(selectedTemplate: any) {
    this.value = selectedTemplate;
    console.log(selectedTemplate);
    return this.value;
}

// bind text box value with chip
chipValue(tag) {
  this.tagarray.push(tag);
}

// submit userForm values

onsubmit(userdata: any) {
    const values = userdata.value;
    const domainName = values.domainName;
    const Purpose = values.Purpose;
    const communityName = values.communityName;
    const tagSelection = values.tagSelection;
    const termscondition = values.termscondition;
    const visibility = values.visibility;
    const description = values.description;
    const value = { domainName, Purpose, communityName, tagSelection, termscondition, visibility, description };
    console.log('communityPage', value);
    this.newcommunity.postNewcommunityDetails(value, domainName).subscribe(
    (data) => console.log('Postdata'),
    error => console.log(error),
    () => console.log('data posted successfully'));
    this.openDialog(value);
    this.reset();
  }

  reset() {
    this.createForm();
  }

  openDialog(value) {
    const dialog = this.dialog.open(NewcommunityDialogboxComponent);
  }
// deselect chip value
  deselectchip(tag) {
   tag =  null;
   return tag;
  }

  ngOnInit() {
  this.newcommunity.getTemplates()
  .subscribe(
    data => { this.newcommunity.communityDetails = data;
      console.log('JSON value', data);
      // const purposeList = [new Set(data.map( item => item.purpose))];
      // console.log('purpose list type',typeof(purposeList));
      // let uniquepurpose = purposeList[0];
      // console.log('unique value',uniquepurpose);
      const lookup = {};
      const items = data;
      const result = [];
      for (let item, i = 0; item = items[i++]; ) {
      const name = item.purpose;
      console.log('name', name);
      if (!(name in lookup)) {
        lookup[name] = name;
      }
    }
      result.push(lookup);
      // this.transform(lookup,name);
      console.log('result', result);
      console.log('inside lookup', lookup);
  },
  error => console.log(error),
    () => console.log('finished')
  );
  }
}
