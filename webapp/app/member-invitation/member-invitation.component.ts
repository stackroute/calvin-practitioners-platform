// import { Component, OnInit } from '@angular/core';
// import { MembersService } from '../community-members-widget/community-members-widget.service';
// import { Route, Router } from '@angular/router';
// import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

// @Component({
//   selector: 'calvin-member-invitation',
//   templateUrl: './member-invitation.component.html',
//   styleUrls: ['./member-invitation.component.css'],
//    providers: [MembersService]
// })
// export class MemberInvitationComponent implements OnInit {
//    members;
//     invitations: FormGroup;
//    memberrole=[{
//      "value":"Admin","viewvalue":"Admin",
//    },
//    {
//      "value":"Moderator","viewvalue":"Moderator",
//    },
//    {
//      "value":"User","viewvalue":"User",
//    },
//    ];
//    memberfield=[
//      {
//        "email":"",
//        "role":"",
//      },
//    ];
//    createForm()
// { this.invitations=this.fb.group({
//      email:[''],
//      role:['']
// });
// }
  
//    newTodo: string;
//     todos: any;
//     todoObj: any;


// constructor( private Memberservice:MembersService,private role: Roleservice, private fb: FormBuilder,  private router: ActivatedRoute) { this.newTodo = '';
//       this.todos = []; 
//       this.createForm();
//     //    this.role.listUniqueRoles(this.router.snapshot.params['domain']).subscribe(res => {
//     //   this.getResults = res;});
    
//   }
//  newField()
//  {

// }

//    addTodo(event) {
//       this.todoObj = {
//         newTodo: this.newTodo,
//         completed: false
//       }
//       this.todos.push(this.todoObj);
//       this.newTodo = '';
//       event.preventDefault();
//     }

//    deleteTodo(index) {
//       this.todos.splice(index, 1);
//     }

//    deleteSelectedTodos() {
//       //need ES5 to reverse loop in order to splice by index
//       for(var i=(this.todos.length -1); i > -1; i--) {
//         if(this.todos[i].completed) {
//           this.todos.splice(i, 1);
//         }
//       }
//     }

 
//  onsubmit(data: any) {
//     const invite = data.value;
//     const email = invite.email;
//     const role = invite.role;
   
//     const inviteDetails = { email,role };
//     console.log('valuee.....',inviteDetails);
//     // this.newcommunity.postNewcommunityDetails(newcommunityDetails, domainName).subscribe(
//     // (data) => console.log('Postdata'),
//     // error =>     this.reset(),
//     // () => this.openDialog(newCommunityObj));
//   }
 
//  ngOnInit() {
//     this.membersWidget.getMember().subscribe(data => {
//     this.members = data.Members;
//    });
//   }

// }


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
  
   value: string;
    AddValue: any;
    Object: any;


 constructor(private membersWidget: MembersService, private router: Router) { this.value = '';
      this.AddValue = []; }
 newField()
 {

}

   addField(event) {
      this.Object = {
        value: this.value,
        completed: false
      }
      this.AddValue.push(this.Object);
      this.value = '';
      event.preventDefault();
    }

   deleteField(index) {
      this.AddValue.splice(index, 1);
    }

//    deleteSelectedAddValue() {
//       //need ES5 to reverse loop in order to splice by index
//       for(var i=(this.AddValue.length -1); i > -1; i--) {
//         if(this.AddValue[i].completed) {
//           this.AddValue.splice(i, 1);
//         }
//       }
//     }

 

 
 ngOnInit() {
  //   this.membersWidget.getMember().subscribe(data => {
  //   this.members = data.Members;
  //  });

  

  }

}
