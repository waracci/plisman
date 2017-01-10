import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2PaginationModule } from 'ng2-pagination';

import { SharedModule } from '../shared/shared.module';
import { ListingsService, ListingTypeService, LocationsService, StatusService } from '../shared/services';

import { ListingsComponent } from './containers/listings/listings.component';
import { ListingComponent } from './containers/listing/listing.component';
import { PostListingComponent } from './containers/post-listing/post-listing.component';
import { ListingsNavigationComponent } from './components/listings-navigation/listings-navigation.component';
import { ListingGridComponent } from './components/listing-grid/listing-grid.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule,
    SharedModule,
    Ng2PaginationModule
  ],
  declarations: [
    ListingsComponent,
    ListingComponent,
    PostListingComponent,
    ListingsNavigationComponent,
    ListingGridComponent
  ],
  exports: [
    ListingsComponent
  ],
  providers: [
    ListingsService,
    ListingTypeService,
    LocationsService,
    StatusService
  ]
})
export class ListingsModule { }
