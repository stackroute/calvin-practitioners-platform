import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CreateCommunityComponent } from '../create-community/create-community.component';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ManageCommunityComponent } from '../manageCommunity/manage-community.component';
import { AppBarComponent } from '../app-bar/app-bar.component';
import { RoleManagementComponent } from '../role-management/role-management.component';
import { RoleActionsComponent } from '../role-actions/role-actions.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

import { CommunityNavbarComponent } from '../community-navbar/community-navbar.component';
import { CommunitySidenavComponent } from '../community-sidenav/community-sidenav.component';
import { CommunityDashboardComponent } from '../community-dashboard/community-dashboard.component';

import {  SideNavComponent } from '../side-nav/side-nav.component';
import { ActivityPageComponent} from '../activity-page/activity-page.component';
// Calvin routes
const routes: ModuleWithProviders = RouterModule.forRoot([
  { path: 'login', component: LoginComponent },
  { path: 'app', component: AppBarComponent, canActivate: [AuthGuard],
    children: [
            { path: 'home', component: UserDashboardComponent },
            { path: '', redirectTo: '/app/home', pathMatch: 'full' },
            { path: 'createCommunity', component: CreateCommunityComponent },
            { path: 'profile', component: UserProfileComponent },
            { path: 'communityDashBoard', component: CommunityDashboardComponent},
            { path: 'SideNavComponent', component: SideNavComponent },
            { path: 'createCommunity', component: CreateCommunityComponent },
            { path: 'role', component: RoleManagementComponent},
            { path: 'actions', component: RoleActionsComponent},
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


