import { Component, OnInit ,Inject } from '@angular/core';
import { ToolPageService } from './tool-page.service';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { MD_DIALOG_DATA, MdDialog, MdDialogRef } from '@angular/material';
import { UserInfoService } from '../core/user-info.service';
@Component({
  selector: 'calvin-tool-page',
  templateUrl: './tool-page.component.html',
  styleUrls: ['./tool-page.component.css'],
  providers: [ ToolPageService ]
})
export class ToolPageComponent implements OnInit {
  toolid: String;
  toolinfo:any;
  flag=0;
  constructor( 
  private toolpageservice: ToolPageService, 
  private router:Router,
  private activeroute: ActivatedRoute,
   private dialog: MdDialog
  ) { }

  ngOnInit() {
        this.toolid= this.activeroute.snapshot.params['toolid'];
        this.toolpageservice.getToolinfo(this.toolid).subscribe(result=>{
        console.log('result is ',result);
        let body=result.json();
        // console.log('body is ',body);
        this.toolinfo=body.data||body;
        console.log('tooinfo is :',this.toolinfo);
        this.toolinfo=this.toolinfo[0];
        this.flag=1;
      });
  }

       integrateTool(){
 
              // alert('toolInt called');

              this.dialog.open(IntegrateTool,{height: '400px',
                                             width: '400px',});

       } 
}

@Component({
  selector: 'IntegrateTool-dialog',
  templateUrl: 'IntegrateTool-dialog.html',
  styleUrls: ['tool-page.component.css'],
  providers: [UserInfoService]
})
export class IntegrateTool implements OnInit {
  
    integrationFlag=0;
   adminCommunities=[];
  ngOnInit() {
 
      this.userservice.getUserCommunity((result)=>{
         result=[{
            "name":"abcd",
            "role": "admin"
         },
         {
            "name":"abcde",
            "role": "admin"
         },
         {
            "name":"abcdf",
            "role": "admin"
         }
         ,{
            "name":"abcdg",
            "role": "owner"
         },{
            "name":"aabcd",
            "role": "user"
         }];

           console.log('communities are',result);
         result.forEach((community)=>{

              if(community.role==='admin'|| community.role==='owner'){

                this.adminCommunities.push(community.name);
              }
         });

      });

      console.log(' the users are admin ',this.adminCommunities) ;    
  }
 
  constructor(private userservice: UserInfoService){}


          integrateToolToCmmunity(){

               this.integrationFlag=1;
          }

}