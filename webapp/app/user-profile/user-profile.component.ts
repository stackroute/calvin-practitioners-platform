import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
@Component({
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;
   tools;
  constructor(private fb: FormBuilder)  {
    this.createprofile();
  }

  ngOnInit() {
       }

 createprofile() {
      this.profileForm = this.fb.group({
        firstname: ['' , [Validators.required , Validators.pattern('[a-z.]')]],
        secondname: ['' , [Validators.required , Validators.pattern('[a-z.]')]],
        email: ['' , Validators.required],
        phonenumber: ['' , Validators.required,
        Validators.minLength(10)]
  });
}
}
