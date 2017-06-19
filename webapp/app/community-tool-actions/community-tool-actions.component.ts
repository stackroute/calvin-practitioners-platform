import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calvin-community-tool-actions',
  templateUrl: './community-tool-actions.component.html',
  styleUrls: ['./community-tool-actions.component.css']
})
export class CommunityToolActionsComponent implements OnInit {

 dummy= [{ 'role': 'Tool 1', 'actions': ['share', 'write', 'comment']},
       { 'role': 'Tool 2', 'actions': ['post' , 'add', 'remove', 'manage']},
       {'role': 'Tool 3', 'actions': ['post', 'add', 'remove', 'manage', 'reply']}];
  constructor() { }
  ngOnInit() { }
}
