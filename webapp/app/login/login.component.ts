import { Component } from '@angular/core';

@Component({
  selector: 'calvin-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'app';
  language = [
    {value: 'E0', viewValue: 'English'},
    {value: 'E1', viewValue: 'Hindi'},
    {value: 'E2', viewValue: 'Telugu'}
  ];
}
