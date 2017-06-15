import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AppBarComponent } from './user-dashboard/app-bar/app-bar.component';
import { UserWidgetsComponent } from './user-dashboard/user-widgets/user-widgets.component';
import { ActivityLogComponent } from './user-dashboard/activity-log/activity-log.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, MdButtonModule, } from '@angular/material';
import { MdCheckboxModule, MdCardModule, MdMenuModule } from '@angular/material';
import { MdToolbarModule, MdIconModule, MdInputModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ManageCommunityComponent } from './manage-community/manage-community.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {LoginRoutingModule} from './login/login-routing.module';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdSelectModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    AppBarComponent,
    UserWidgetsComponent,
    ActivityLogComponent,
    LoginComponent,
    NotfoundComponent,
    ManageCommunityComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    LoginRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    AppRoutingModule,
    MdCheckboxModule,
    MaterialModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdSelectModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
