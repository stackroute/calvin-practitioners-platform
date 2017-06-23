import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { MdDialog } from '@angular/material';

import { TemplateBrowserComponent } from '../template-browser/template-browser.component';
import { NewcommunityDialogboxComponent } from '../newcommunity-dialogbox/newcommunity-dialogbox.component';
import { CreateCommunityService } from './create-community.service';

@Component({
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css'],
  providers: [CreateCommunityService]
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
  
  selectedPurpose ={};
  
  constructor(private fb: FormBuilder, private newcommunity: CreateCommunityService, public dialog: MdDialog) {
    
    this.createForm();

  }
  
  // reactive form validation for userForm
  createForm() {
    this.userForm = this.fb.group({
      domainName: ['', [Validators.required, Validators.pattern('[a-z.]{8,20}')]],
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
  
  // bind text box value
  
  chipValue(tag: any) {
    
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
    console.log(value);
    this.newcommunity.postcommunitydata(value).subscribe(
    (data) => console.log('Post data'),
    error => console.log(error),
    () => console.log('data posted successfully'));
    this.openDialog();
    this.reset();
  }
  
  reset() {
    this.createForm();
  }

  openDialog() {
    const dialog = this.dialog.open(NewcommunityDialogboxComponent);
  }
  
  // cancel for redirect to userdashboard
  
  oncancel() {
    
  }
 
  getPurpose()
  {
    
  }
  
  ngOnInit() {
    this.newcommunity.getcurrentData()
    .subscribe(
    data => {this.newcommunity.communityDetails = data;
      console.log(this.newcommunity.communityDetails);
    },
    error => console.log(error),
    () => console.log('finished')
    );
  }
}
