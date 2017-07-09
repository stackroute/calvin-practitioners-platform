import { Component, OnInit } from '@angular/core';
import { MembersService } from '../community-members-widget/community-members-widget.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'calvin-member-invitation',
  templateUrl: './member-invitation.component.html',
  styleUrls: ['./member-invitation.component.css'],
   providers: [MembersService]
})
export class MemberInvitationComponent implements OnInit {
   members;
   memberrole=[{
     "value":"Admin","viewvalue":"Admin",
   },
   {
     "value":"Moderator","viewvalue":"Moderator",
   },
   {
     "value":"User","viewvalue":"User",
   },
   ];
   memberfield=[
     {
       "email":"",
       "role":"",
     },
   ];
  
    newTodo: string;
    todos: any;
    todoObj: any;


  constructor(private membersWidget: MembersService, private router: Router) { this.newTodo = '';
      this.todos = []; }
 newField()
 {

 }

    addTodo(event) {
      this.todoObj = {
        newTodo: this.newTodo,
        completed: false
      }
      this.todos.push(this.todoObj);
      this.newTodo = '';
      event.preventDefault();
    }

    deleteTodo(index) {
      this.todos.splice(index, 1);
    }

    deleteSelectedTodos() {
      //need ES5 to reverse loop in order to splice by index
      for(var i=(this.todos.length -1); i > -1; i--) {
        if(this.todos[i].completed) {
          this.todos.splice(i, 1);
        }
      }
    }

  

  
  ngOnInit() {
  //   this.membersWidget.getMember().subscribe(data => {
  //   this.members = data.Members;
  //  });
  }

}
