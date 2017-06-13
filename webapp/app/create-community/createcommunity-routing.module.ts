import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthGuard } from '../auth-guard.service';
import { CreateCommunityComponent } from './create-community.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: CreateCommunityComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})

export class CommunityRoutingModule {}
