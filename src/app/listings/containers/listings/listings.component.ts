import { Component, OnInit } from '@angular/core';

import { Listing, ListingType, LocationModel, StatusModel } from '../../../shared/models';
import { ListingsService, ListingTypeService, LocationsService, StatusService } from '../../../shared/services';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listings: Listing[];
  listingTypes: ListingType[];
  locations: LocationModel[];
  status: StatusModel[];
  searchTerm: string;

  constructor(
    private _listingService: ListingsService,
    private _listingTypeService: ListingTypeService,
    private _locationsService: LocationsService,
    private _statusService: StatusService
  ) {
   }

  ngOnInit() {
    this._listingService.getListing()
      .subscribe(listings => this.listings = listings);
      console.log(this.listings);

    this._listingTypeService.getTypes()
      .subscribe(listingTypes => this.listingTypes = listingTypes);

    this._locationsService.getLocations()
      .subscribe(locations => this.locations = locations);

    this._statusService.getStatus()
      .subscribe(status => this.status = status);
  }

  filterListingsType(listingType) {
    this._listingService.getListing(listingType)
      .subscribe(listings => this.listings = listings);
  }

  filterListingsStatus(status) {
    this._listingService.getListingByStatus(status)
      .subscribe(listings => this.listings = listings);
    console.log(status);
  }

}
