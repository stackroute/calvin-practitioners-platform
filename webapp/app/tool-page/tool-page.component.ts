import { Component, Input, OnInit, Inject } from '@angular/core';
import { ToolPageService } from './tool-page.service';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { MD_DIALOG_DATA, MdDialog, MdDialogRef } from '@angular/material';
import { UserInfoService } from '../core/user-info.service';
import { ToolConfigService } from '../tool-config-page/tool-config-page.service';
@Component({
  selector: 'calvin-tool-page',
  templateUrl: './tool-page.component.html',
  styleUrls: ['./tool-page.component.css'],
  providers: [ToolPageService]
})
export class ToolPageComponent implements OnInit {
    
 @Input() toolid: String;
  toolinfo: any;
  flag = 0;
  constructor(
    private toolpageservice: ToolPageService,
    private router: Router,
    private activeroute: ActivatedRoute,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
    this.toolid = this.activeroute.snapshot.params['toolid'];
    //console.log("toolid",this.toolid);
    this.toolpageservice.getToolinfo(this.toolid).subscribe(result => {
      let body = result.json();
      // console.log('body is ',body);
      this.toolinfo = body.data || body;
      // console.log('tooinfo is :', this.toolinfo);
      this.toolinfo = this.toolinfo[0];
      this.flag = 1;
    });
  }

  integrateTool() {

    // alert('toolInt called');

    // this.dialog.open(IntegrateTool,{
    //   data:this.toolid;
    //   });
    this.dialog.open(IntegrateTool, {
      data:this.toolid
    });
  }
}

@Component({
  selector: 'IntegrateTool-dialog',
  templateUrl: 'IntegrateTool-dialog.html',
  styleUrls: ['tool-page.component.css'],
  providers: [UserInfoService,ToolConfigService]
})
export class IntegrateTool implements OnInit {
  toolid:any;
  domain: string;
  integrationFlag = 0;
  adminCommunities = [];
  ngOnInit() {

    this.userservice.getUserCommunity((result) => {

      // console.log('communities are', result);
      result.forEach((community) => {
        // console.log('get community avatar', community.avatar);
        if (community.role === 'admin' || community.role === 'owner') {

          this.adminCommunities.push({domain: community.domain, avatar: community.avatar});
        }
      });
    });

    // console.log(' the users are admin ', this.adminCommunities);
  }

  // constructor(
  //   private userservice: UserInfoService,
  //   private router: Router,
  //   @Inject(MD_DIALOG_DATA) public data: any, 
  //   public dialogRef: MdDialogRef<AddToolComponent>) {
  //   this.toolid=data;
  // ) { }
 constructor( 
  private userservice: UserInfoService,
  private toolservice: ToolConfigService,
  private router: Router, 
  @Inject(MD_DIALOG_DATA) public data: any, 
  public dialogRef: MdDialogRef<ToolPageComponent>) {
  this.toolid=data;
  }
  
  integrateToolToCmmunity(domainname) {
    // console.log('domain name is ',domainname);
    this.domain=domainname;

    // console.log('inside',this.domain);
    this.toolservice.saveDomain(this.domain);
    // this.router.navigate[(`/app/toolconfig/${this.toolid}`)];
     this.router.navigate([`/app/toolconfig/${this.domain}/${this.toolid}`]);
  }
  navigateToCC(){
       this.router.navigate([`/app/createCommunity`]);
  }
  // navigateToCC() {
  //   this.router.navigate([`/app/createCommunity`])
  // }

}