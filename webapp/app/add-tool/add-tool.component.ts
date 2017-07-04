import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'calvin-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.css']
})
export class AddToolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerTool(form: NgForm) {
    alert('called');
    console.log(form.value);
    // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.
  }

}
