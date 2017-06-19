import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ManageCommunityComponent } from './manageCommunity/manage-community.component';
import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import { MdSidenavModule } from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { UserWidgetsComponent } from './my-communities/my-communities.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, MdButtonModule, } from '@angular/material';
import { MdCheckboxModule, MdCardModule, MdMenuModule } from '@angular/material';
import { MdToolbarModule, MdIconModule, MdInputModule, MdSlideToggleModule, MdDialogModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSelectModule } from '@angular/material';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateCommunityComponent } from './create-community/create-community.component';
import { CommunityRoleActionsComponent } from './community-role-actions/community-role-actions.component';
import { CommunityRoleManagementComponent } from './community-role-management/community-role-management.component';
import { CommunityToolActionsComponent } from './community-tool-actions/community-tool-actions.component';
import { TemplateBrowserComponent } from './template-browser/template-browser.component';
import { CommunityActivitylogsComponent } from './community-activitylogs/community-activitylogs.component';
import { CommunityNavbarComponent } from './community-navbar/community-navbar.component';
import { CommunitySidenavComponent } from './community-sidenav/community-sidenav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CommunityDashboardComponent } from './community-dashboard/community-dashboard.component';
import { ActivityCardComponent } from './activity-card/activity-card.component';
import { ActivityPageComponent } from './activity-page/activity-page.component';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    ManageCommunityComponent,
    UserDashboardComponent,
    CreateCommunityComponent,
    AppBarComponent,
    UserWidgetsComponent,
    LoginComponent,
    UserProfileComponent,
    PageNotFoundComponent,
    CommunityRoleActionsComponent,
    CommunityRoleManagementComponent,
    CommunityToolActionsComponent,
    TemplateBrowserComponent,
    CommunityActivitylogsComponent,
    CommunityNavbarComponent,
    CommunitySidenavComponent,
    SideNavComponent,
    CommunityDashboardComponent,
    ActivityCardComponent,
    ActivityPageComponent

  ],

  imports: [
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
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  entryComponents: [CommunityToolActionsComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

