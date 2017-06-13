import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ManageCommunityComponent } from './manage-community/manage-community.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';
import {AuthService} from './auth.service';

// Calvin routes
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: UserDashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'createCommunity', loadChildren: './create-community/create-community.module#CreateCommuniyModule', canLoad: [AuthGuard] },
  { path: 'manageCommunity', component: ManageCommunityComponent, canLoad: [AuthGuard] },
  { path: 'profile', component: UserProfileComponent },
  { path: '**', component: NotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    CanDeactivateGuard,
    AuthGuard,
    AuthService
  ]
})
export class AppRoutingModule { }


