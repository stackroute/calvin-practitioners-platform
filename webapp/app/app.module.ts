import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ManageCommunityComponent } from './manage-community/manage-community.component';
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

// import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ToolsService } from './community-tools-widget/community-tools-widget.service';
import { MembersService } from './community-members-widget/community-members-widget.service';
import { RoleServices } from './community-role-management/community-role-management.service';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { ActivityService } from './activity-page/activity-page.service';
import { CreateCommunityService } from './create-community/create-community.service';

import { CommunityMemberManagementComponent } from './community-member-management/community-member-management.component';

import { ManageCommunityToolsComponent } from './manage-community-tools/manage-community-tools.component';
import { AddToolComponent } from './add-tool/add-tool.component';
import { MemberInvitationComponent } from './member-invitation/member-invitation.component';


@NgModule({
  declarations: [
    AppComponent,
    ManageCommunityComponent,
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
    ActivityCardComponent,
    ActivityPageComponent,
    CommunityProfileComponent,
    CommunityToolsWidgetComponent,
    CommunityMembersWidgetComponent,
    CommunityRoleManagementComponent,
    CommunityRoleActionsComponent,
    CommunityToolActionsComponent,
    ActivityPageComponent,
    UserWidgetsComponent,

    CommunityMemberManagementComponent,

    ManageCommunityToolsComponent,
    AddToolComponent,
    MemberInvitationComponent

     ],

  imports: [
    InfiniteScrollModule,
    MdSidenavModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
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
    ReactiveFormsModule
    ],
  entryComponents: [CommunityToolActionsComponent],

  providers: [RoleServices, ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }

