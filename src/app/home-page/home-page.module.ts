import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { AuthService } from './../shared/services/auth.service';

import { HomePageComponent } from './home-page.component';
import { FeaturedListingsComponent } from './components/featured-listings/featured-listings.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    FeaturedListingsComponent,
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ],
  providers: [
    AuthService
  ]
})

export class HomePageModule {

}