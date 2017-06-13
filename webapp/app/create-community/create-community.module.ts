import {NgModule} from '@angular/core';

import { CommonModule }   from '@angular/common';
import {CommunityRoutingModule} from './createcommunity-routing.module';
import {CreateCommunityComponent} from './create-community.component';

@NgModule({
  imports: [
    CommonModule,
    CommunityRoutingModule
  ],
  declarations: [
    CreateCommunityComponent
  ]
})

export class CreateCommuniyModule {}
