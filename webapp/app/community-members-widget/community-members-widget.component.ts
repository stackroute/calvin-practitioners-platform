import { Component, OnInit } from '@angular/core';
import { MembersService } from './community-members-widget.service';


@Component({
	selector: 'calvin-community-members-widget',
	templateUrl: './community-members-widget.component.html',
	styleUrls: ['./community-members-widget.component.css'],
	providers: [MembersService]
})
export class CommunityMembersWidgetComponent implements OnInit {
	members;
	constructor(private membersWidget: MembersService) { }

	ngOnInit() {
		this.membersWidget.getMember().subscribe(data => {
			this.members = data.Members;
		});
	}
}
