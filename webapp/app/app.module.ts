import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ManageCommunityComponent, updateCommunity} from './manage-community/manage-community.component';
import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import { MdSidenavModule } from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, MdButtonModule, } from '@angular/material';
import { MdCheckboxModule, MdCardModule, MdMenuModule } from '@angular/material';
import { MdToolbarModule, MdIconModule, MdInputModule, MdSlideToggleModule, MdDialogModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSelectModule } from '@angular/material';
import { CreateCommunityComponent } from './create-community/create-community.component';
import { CommunityRoleActionsComponent } from './community-role-actions/community-role-actions.component';
import { CommunityRoleManagementComponent } from './community-role-management/community-role-management.component';
import { CommunityToolActionsComponent } from './community-tool-actions/community-tool-actions.component';
import { TemplateBrowserComponent } from './template-browser/template-browser.component';
import { CommunityActivitylogsComponent } from './community-activitylogs/community-activitylogs.component';
import { CommunityDashboardComponent } from './community-dashboard/community-dashboard.component';
import { ActivityCardComponent } from './activity-card/activity-card.component';
import { ActivityPageComponent } from './activity-page/activity-page.component';
import { CommunityProfileComponent } from './community-profile/community-profile.component';
import { CommunityToolsWidgetComponent } from './community-tools-widget/community-tools-widget.component';
import { CommunityMembersWidgetComponent } from './community-members-widget/community-members-widget.component';
import { UserWidgetsComponent } from './my-communities/my-communities.component';
import { CommunityDialogue } from './community-tool-management/community-tool-management.component';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ToolsService } from './community-tools-widget/community-tools-widget.service';
import { ToolService } from './community-tool-management/community-tool-management.service';
import { MembersService } from './community-members-widget/community-members-widget.service';
import { RoleServices } from './community-role-management/community-role-management.service';
import { ToolActions } from './community-tool-actions/community-tool-actions.service';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { ActivityService } from './activity-page/activity-page.service';
import { CreateCommunityService } from './create-community/create-community.service';
import { CommunityProfileService } from './community-profile/community-profile.service';
import { updateSpecificCommunityService } from './manage-community/manage-community.service';
import { ToolMarketService } from './tool-market-place/tool-market-place.service';
import { NewRoleService } from './community-new-role-creation/community-new-role-creation.service';
import { KeysPipe } from './community-tool-actions/community-tool-actions.pipe';
import {RoleListServices} from './member-edit/member-edit.service';
import { MarkdownModule } from 'angular2-markdown';
import{UserInfoService} from './core/user-info.service';
import { CommunityMemberManagementComponent } from './community-member-management/community-member-management.component';
import { Memberservice } from './community-member-management/community-member-management.service';
import { ManageCommunityToolsComponent } from './manage-community-tools/manage-community-tools.component';
import { AddToolComponent,SucessDialog } from './add-tool/add-tool.component';
import { NewcommunityDialogboxComponent } from './newcommunity-dialogbox/newcommunity-dialogbox.component';
import { MemberInvitationComponent } from './member-invitation/member-invitation.component';
import { ToolMarketPlaceComponent } from './tool-market-place/tool-market-place.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { ToolPageComponent,IntegrateTool } from './tool-page/tool-page.component';
import { AppBarService } from './app-bar/app-bar.service';
import { CommunityNewRoleCreationComponent } from './community-new-role-creation/community-new-role-creation.component';
import { CommunityToolManagementComponent } from './community-tool-management/community-tool-management.component';
import { DialogResultExampleDialog } from './user-profile/user-profile.component';
import { DialogResultDialog } from './tool-config-page/tool-config-page.component';
import { ToolConfigPageComponent } from './tool-config-page/tool-config-page.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AcceptPageComponent } from './accept-page/accept-page.component';
import { InvalidUserComponent } from './invalid-user/invalid-user.component'
import { MdAutocompleteModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ToolPageComponent,
    updateCommunity,
    UserDashboardComponent,
    CreateCommunityComponent,
    AppBarComponent,
    LoginComponent,
    UserProfileComponent,
    CommunityRoleActionsComponent,
    CommunityRoleManagementComponent,
    CommunityToolActionsComponent,
    TemplateBrowserComponent,
    CommunityActivitylogsComponent,
    CommunityDashboardComponent, 
    ManageCommunityComponent,
    ActivityCardComponent,
    ActivityPageComponent,
    CommunityProfileComponent,
    CommunityToolsWidgetComponent,
    CommunityMembersWidgetComponent,
    UserWidgetsComponent,
    ActivityPageComponent,
    CommunityMemberManagementComponent,
    ManageCommunityToolsComponent,
    AddToolComponent,
    NewcommunityDialogboxComponent,
    MemberInvitationComponent,
    ToolMarketPlaceComponent,
    SucessDialog,
    MemberEditComponent,
    ToolPageComponent,
    IntegrateTool,
    CommunityNewRoleCreationComponent,
    CommunityToolManagementComponent,
    CommunityDialogue,
    KeysPipe,
    DialogResultExampleDialog,
    ToolConfigPageComponent,
    DialogResultDialog,
    NotificationsComponent,
    DialogResultDialog,
    AcceptPageComponent,
    InvalidUserComponent
     ],

  imports: [
    MarkdownModule,
    InfiniteScrollModule,
    MdSidenavModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdSelectModule,
    MdInputModule,
    MdSlideToggleModule,
    MdDialogModule,
    ReactiveFormsModule,
    MdAutocompleteModule,
  ],

  entryComponents: [IntegrateTool,CommunityToolActionsComponent, NewcommunityDialogboxComponent,DialogResultExampleDialog,
                      MemberInvitationComponent, SucessDialog,
                      MemberEditComponent,CommunityRoleManagementComponent, updateCommunity,CommunityNewRoleCreationComponent, DialogResultDialog],


  providers: [RoleServices,RoleListServices, ToolActions, CommunityProfileService,ActivityService,UserInfoService,
               updateSpecificCommunityService, ToolMarketService,ToolService,NewRoleService,KeysPipe,MembersService,Memberservice],
  bootstrap: [AppComponent]
})
export class AppModule { }