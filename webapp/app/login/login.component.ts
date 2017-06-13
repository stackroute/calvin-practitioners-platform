import { Component } from '@angular/core';
import { LoginService } from './login-service.component';
@Component({
  selector: 'calvin-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {
  title = 'app';
  language = [
    { value: 'E0', viewValue: 'English' },
    { value: 'E1', viewValue: 'Hindi' },
    { value: 'E2', viewValue: 'Telugu' }
  ];

  constructor(private loginservice: LoginService) {

  }

  login() {

    alert('login clicked');
    this.loginservice.loginapp().subscribe(data => {
      console.log("login doine");
    })

  }
}
