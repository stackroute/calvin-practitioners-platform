import { Component, OnInit, Input } from '@angular/core';
import { Route, Router } from '@angular/router';

import { CreateCommunityComponent } from '../create-community/create-community.component';


@Component({
  selector: 'calvin-newcommunity-dialogbox',
  templateUrl: './newcommunity-dialogbox.component.html',
  styleUrls: ['./newcommunity-dialogbox.component.css']
})

export class NewcommunityDialogboxComponent implements OnInit {

constructor(private router: Router) { }

routeToManage() {
    this.router.navigate(['/app/managecommunity']);
  }

ngOnInit() { }

}
