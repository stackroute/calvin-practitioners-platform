import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { MdDialog } from '@angular/material';
import { Route, Router } from '@angular/router';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
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

  visibility = ['ide', 'forum', 'stackoverflow'];

  uniquePurposeArry = [];

  tagCtrl: FormControl;

  filteredtag: any;

  constructor(private fb: FormBuilder, private newcommunity: CreateCommunityService, public dialog: MdDialog, private router: Router) {
    this.createForm();
    this.tagCtrl = new FormControl();
    this.filteredtag = this.tagCtrl.valueChanges
    .startWith(null)
    .map(name => this.filterStates(name));
  }

  filterStates(val: string) {
    return val ? this.visibility.filter(s => s.indexOf(val.toLowerCase()) === 0)
    : this.visibility;
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
      tags: ['', Validators.required],
      termscondition: ['', Validators.required]
    });
  }

  //  check whether the card is clickable or not
  onselect(selectedTemplate: any) {
    this.value = selectedTemplate;
    alert(selectedTemplate);
    return this.value;
  }
  // bind text box value with chip
  chipValue(tag) {
    this.tagarray.push(tag);
    console.log(this.tagarray);
  }

  // deselect chip value
  deselectchip(tag) {
    const tagvalue = tag;
    this.tagarray = this.tagarray.filter(item => item !== tagvalue);
    console.log(this.tagarray);
  }
  // submit userForm values
  onsubmit(userdata: any) {
    const newCommunityObj = userdata.value;
    newCommunityObj.template = this.value;
    newCommunityObj.tags = this.tagarray;
    // newCommunityObj.domainName;
    // newCommunityObj.communityName;
    // newCommunityObj.visibility;
    // newCommunityObj.description;
    // console.log(this.tagarray);
    // console.log(newCommunityObj)
    const domainName = newCommunityObj.domainName;
    console.log('communityPage', newCommunityObj);
    // console.log('dominname',domainName);
    this.newcommunity.postNewcommunityDetails(newCommunityObj, domainName).subscribe(
    (data) => console.log('Postdata'),
    error =>     this.reset(),
    () => this.openDialog(newCommunityObj));
  } // console.log('communityPage', newCommunityObj);
  // console.log('dominname',domainName);

  reset() {
    this.createForm();
  }

  openDialog(value) {
    const dialog = this.dialog.open(NewcommunityDialogboxComponent);
  }

  ngOnInit() {
    this.newcommunity.getTemplates()
    .subscribe(
    data => { this.newcommunity.communityDetails = data;
    console.log('JSON value', data);
    const purposeList = [new Set(data.map( item => item.purpose))];
    const myArray = Array.from(purposeList);
    this.uniquePurposeArry =  Array.from(myArray[0]);
  },
  error => console.log(error),
  () => console.log('finished')
    );
  }
}
