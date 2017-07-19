import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CreateCommunityComponent } from '../create-community/create-community.component';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { ManageCommunityComponent } from '../manage-community/manage-community.component';
import { AppBarComponent } from '../app-bar/app-bar.component';
import { CommunityRoleActionsComponent } from '../community-role-actions/community-role-actions.component';
import { CommunityRoleManagementComponent } from '../community-role-management/community-role-management.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CommunityDashboardComponent } from '../community-dashboard/community-dashboard.component';
import { ActivityPageComponent } from '../activity-page/activity-page.component';
import { CommunityToolsWidgetComponent } from '../community-tools-widget/community-tools-widget.component';
import { CommunityMembersWidgetComponent } from '../community-members-widget/community-members-widget.component';
import { ManageCommunityToolsComponent } from '../manage-community-tools/manage-community-tools.component';
import { AddToolComponent } from '../add-tool/add-tool.component';
import { UserCommunities } from '../my-communities/my-communities.services';
import { ToolMarketPlaceComponent } from '../tool-market-place/tool-market-place.component';

import { ToolPageComponent } from '../tool-page/tool-page.component';
import { CommunityMemberManagementComponent } from '../community-member-management/community-member-management.component';
import { MemberInvitationComponent } from "../member-invitation/member-invitation.component";
import { ToolConfigPageComponent } from '../tool-config-page/tool-config-page.component';
import { InvalidLoginComponent } from '../member-invitation/member-invitation.component';
import { AcceptPageComponent } from '../member-invitation/member-invitation.component';

// Calvin routes
const routes: ModuleWithProviders = RouterModule.forRoot([
  { path: 'login', component: LoginComponent },
  { path: 'app', component: AppBarComponent, canActivateChild: [AuthGuard],
    children: [
      { path: 'home', component: UserDashboardComponent },
      { path: '', redirectTo: '/app/home', pathMatch: 'full' },
      { path: 'createCommunity', component: CreateCommunityComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'userCommunity/:domain', component: CommunityDashboardComponent },
      { path: 'actions', component: CommunityRoleManagementComponent },
      { path: 'communityDashBoard/:domain', component: CommunityDashboardComponent },
      { path: 'managecommunity/:domain', component: ManageCommunityComponent },
      { path: 'activity', component: ActivityPageComponent },
      { path: 'members', component: MemberInvitationComponent },
      { path: 'members:domain', component: CommunityMemberManagementComponent },
      { path: 'managetools', component: ManageCommunityToolsComponent},
      { path: 'addtool', component: AddToolComponent},
      { path: 'toolmarket', component : ToolMarketPlaceComponent},
      { path: 'toolpage/:toolid', component: ToolPageComponent },
      { path: 'toolconfig/:domain/:toolid', component:ToolConfigPageComponent},
      { path: 'communityinvite/invalid', component:InvalidLoginComponent},
      { path: 'communityinvite/invalid', component:AcceptPageComponent}
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
    AuthService,
    UserCommunities
  ]
})
export class AppRoutingModule { }


