import { Component, OnInit } from '@angular/core';
import { Memberservice } from '../community-member-management/community-member-management.service';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'calvin-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css'],
  providers: [Memberservice]
})
export class MemberEditComponent implements OnInit {
 members;
  constructor(private membersWidget: Memberservice, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
     console.log("Current Domain is: ", this.route.snapshot.params['domain']);
    this.membersWidget.getMember(this.route.snapshot.params['domain']).subscribe(data => {
    this.members = data;
    console.log(this.members);
   });
  }

}
