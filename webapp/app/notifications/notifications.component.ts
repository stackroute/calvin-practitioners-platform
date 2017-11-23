import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import {SocketService} from './notification.service';
import { UserInfoService } from '../core/user-info.service'


@Component({
  selector: 'calvin-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers:[SocketService, UserInfoService],
})
export class NotificationsComponent implements OnInit {
   private notifications: any[];
   private ioConnection : any;
   user;
   socket;
   message = [];


  constructor(private socketService:SocketService,private userInfo:UserInfoService) { }

  ngOnInit():void {
    this.userInfo.getUserDetail((userdetails) => {
      this.user = userdetails.username;
      console.log('user is : ' + this.user);
      this.initSocketIoConnection(this.user);
    });
  }

   private initSocketIoConnection(username: string): void {
       this.notifications = [];
       this.ioConnection = this.socketService.get(username).subscribe((newNotification) => {
           this.notifications.push(newNotification);
           console.log("notificationsss",this.notifications);
       });

}

}