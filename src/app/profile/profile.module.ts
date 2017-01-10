import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { AuthService } from './../shared/services/auth.service';

import { ProfileComponent } from './profile.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { UserListingsComponent } from './components/user-listings/user-listings.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    ProfileComponent,
    UserDetailsComponent,
    UserMenuComponent,
    UserListingsComponent
  ],
  exports: [
    ProfileComponent
  ],
  providers: [
    AuthService
  ]

})
export class ProfileModule { }
