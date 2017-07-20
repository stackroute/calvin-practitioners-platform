import { Component, OnInit, Input,Inject, Output, Pipe, PipeTransform, EventEmitter } from '@angular/core';
import { NewRoleService } from './community-new-role-creation.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl} from '@angular/forms';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { MD_DIALOG_DATA, MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

@Component({
  selector: 'calvin-community-new-role-creation',
  templateUrl: './community-new-role-creation.component.html',
  styleUrls: ['./community-new-role-creation.component.css']
})export class CommunityNewRoleCreationComponent implements OnInit {
 selected = [];
 getresults = [];
 checkBoxValue: boolean = false;
 sample = [];
 domainName;
 toolArray = [];
 roleValue: FormGroup;
 isDomainExists = false;

 @Input() community;
 


 constructor(private tool: NewRoleService, private fb: FormBuilder,
  private snackBar: MdSnackBar, private route: ActivatedRoute,
  @Inject(MD_DIALOG_DATA) public data: any,
  public dialogRef: MdDialogRef < CommunityNewRoleCreationComponent > ) {
  this.domainName = data;

  //console.log('domin name from dialog', this.domainName);


 }

 roleValidation() {
  this.roleValue = this.fb.group({
   roleName: ['', [Validators.required, Validators.pattern('[a-z]{4,20}')]],
  });
 }
 isRoleNameUnique(role) {
  this.tool.listUniqueRoles(this.domainName).subscribe(res => {
   if (res.role === role) {
    console.log("result false", res.role, role);
    this.isDomainExists = false;
   } else {
    console.log("result true", Object.keys(res).length);
    this.isDomainExists = true;
   }
  });
 }
 getCheckboxValue(toolId, status, role) {
  const grant = "true";
  const x = {};
  x[status] = grant;
  const actions = x;
  const deleted = this.selected
  const index = this.selected.indexOf({
   toolId,
   actions,
   role
  }); 
  if (index === -1) {
   this.selected.push({
    toolId,
    actions,
    role
   });
  }
  if (index > -1) {
   console.log(index)
   this.selected.splice(index, 1);
  }
  console.log(this.selected, "fdsgsdgsdg");
  return this.selected;
 }

 update() {
  this.tool.createRoles(this.domainName, this.selected).subscribe(res => {
   this.snackBar.open('New Role Created Successfully', 'X', {
    duration: 2000
   });
   this.sample.push(res);
   this.dialogRef.close({
    res: this.sample,
   });
   console.log("in new role service", res,this.sample)
  });
 }

 ngOnInit() {
  this.tool.listTools(this.domainName).subscribe(res => {
   this.sample.push(res);
  });
  this.roleValidation();
 }

}