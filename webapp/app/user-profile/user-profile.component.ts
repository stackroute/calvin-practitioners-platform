import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createprofile();
  }
  createprofile() {
      this.profileForm = this.fb.group({
        firstname: ['' , Validators.required,
        Validators.minLength(4)],
        secondname: ['' , Validators.required,
        Validators.minLength(4)],
        email: ['' , Validators.required,
        Validators.minLength(4)]
  });
  }

  ngOnInit() {
  }

}
