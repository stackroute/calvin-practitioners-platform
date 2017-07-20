import { Component, OnInit } from '@angular/core';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { UserInfoService } from '../core/user-info.service';
import { acceptService } from '../accept-page/accept-page.service';

@Component({
  selector: 'calvin-accept-page',
  templateUrl: './accept-page.component.html',
  styleUrls: ['./accept-page.component.css'],
  providers:[acceptService]
})
export class AcceptPageComponent implements OnInit {
  
  user: {};
  username;
  flag = 0;
  resultArray=[];
  sub;
  domain;
  role;

  
  constructor(private route: ActivatedRoute,private userservice: UserInfoService,
  private profileService: acceptService) 
  { 
    this.domain=route.snapshot.params.domain;
    console.log('domainName is',this.domain); 
    this.role=route.snapshot.params.role;
    console.log('role is',this.role); 
  }

  ngOnInit() {
    
       this.userservice.getUserDetail((userdetails) => {
      this.user = userdetails;
      this.username = userdetails.username;
      this.flag = 1;
      console.log("UserName is",this.username);
      
    });
  }

  
  update()
  {
     this.profileService.updateMember(this.domain,this.username,this.role).subscribe(res=>{
       console.log("result",res);
     });
    
  }
  // routeToCommunity(){
   
  //   console.log(this.domainName);
  //   this.router.navigate([`/app/Home/${this.domainName}`]);
  }

