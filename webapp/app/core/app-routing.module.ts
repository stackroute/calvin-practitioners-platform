import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CreateCommunityComponent } from '../create-community/create-community.component';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ManageCommunityComponent } from '../manage-community/manage-community.component';
import { AppBarComponent } from '../app-bar/app-bar.component';
import { CommunityRoleActionsComponent } from '../community-role-actions/community-role-actions.component';
import { CommunityRoleManagementComponent } from '../community-role-management/community-role-management.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CommunityDashboardComponent } from '../community-dashboard/community-dashboard.component';
import {  SideNavComponent } from '../side-nav/side-nav.component';
import { ActivityPageComponent} from '../activity-page/activity-page.component';
import { CommunityToolsWidgetComponent } from '../community-tools-widget/community-tools-widget.component';
import { CommunityMembersWidgetComponent } from '../community-members-widget/community-members-widget.component';
// Calvin routes
const routes: ModuleWithProviders = RouterModule.forRoot([
  { path: 'login', component: LoginComponent },
  { path: 'app', component: AppBarComponent, canActivateChild: [AuthGuard],
  children: [
            { path: 'home', component: UserDashboardComponent },
            { path: '', redirectTo: '/app/home', pathMatch: 'full' },
            { path: 'createCommunity', component: CreateCommunityComponent },
            { path: 'profile', component: UserProfileComponent },
            { path: 'actions', component: CommunityRoleManagementComponent},
            { path: 'managecommunity', component: ManageCommunityComponent},
            { path: 'communityDashBoard', component: CommunityDashboardComponent},
            { path: 'createCommunity', component: CreateCommunityComponent },
            { path: 'managecommunity', component: ManageCommunityComponent},
            { path: 'activity' , component: ActivityPageComponent}
            ]
  },
  { path: '', redirectTo: '/app/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/app/home', pathMatch: 'full' }
], { useHash: true });


@NgModule({
  imports: [routes],
  exports: [RouterModule],
  providers: [
    CanDeactivateGuard,
    AuthGuard,
    AuthService
  ]
})
export class AppRoutingModule { }


