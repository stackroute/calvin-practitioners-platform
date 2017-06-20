import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {MdDialog} from '@angular/material';

import { TemplateBrowserComponent } from '../template-browser/template-browser.component';
import { CreateCommunityService } from './create-community.service';

@Component({
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css'],
  providers: [CreateCommunityService]
})


export class CreateCommunityComponent implements OnInit {

  templatevalue;

  userForm: FormGroup;
  
//  template: FormGroup;

  public tagarray= [];

  visibility = [
    {"value": "Public", "viewValue": "Public"},
      {"value": "Private", "viewValue": "Private"},
      {"value": "Moderate", "viewValue": "Moderate"}
    ];
   value:string;
  constructor(private dialog: MdDialog, private fb: FormBuilder, private newcommunity: CreateCommunityService) {

    this.createForm();

    
    }

// reactive form validation for userForm
  createForm() {
        this.userForm = this.fb.group({
          domainName: ['', [Validators.required, Validators.pattern('[a-z.]{8,20}')]],
          communityName: ['', Validators.required],
          Purpose: ['', Validators.required],
          visibility: ['Public', Validators.required],
          template: ['',Validators.required],
          tagSelection: ['', Validators.required],
          termscondition: ['', Validators.required]
        });
    }

//  check whether the card is clickable or not

 onselect(selectedTemplate: any) {

   this.value=selectedTemplate;
      console.log(selectedTemplate);

  //   this.template=new FormGroup({
  //       templatevalue: new FormControl()
  //  })
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
                  this.newcommunity.postfavdata(value).subscribe(
                   (data) => console.log('Post data'),
                    error => alert(error),
                    () => console.log('data posted successfully'));
        }

 // cancel for redirect to userdashboard

  oncancel() {

   }
  ngOnInit() {
    this.newcommunity.getcurrentData()
        .subscribe(
            data=>{this.templatevalue=data.community;
              console.log(this.templatevalue);
            },            
            error=>alert(error),
            ()=>console.log("finished")
        );
  }
}

