import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import 'rxjs/add/operator/take';

import { Listing } from '../../../shared/models';
import { ListingsService } from '../../../shared/services';


@Component({
  selector: 'app-single-listing',
  templateUrl: './single-listing.component.html',
  styleUrls: ['./single-listing.component.css']
})


export class SingleListingComponent implements OnInit, OnDestroy {
  listing: Listing;
  subscription: Subscription;

  errorMessage: string;

  constructor(
    private _listingService: ListingsService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let key: string;
    this._activatedRoute.params.take(1).subscribe(param => key = param['id']);
    this.subscription = this._listingService.getSingleListing(key)
      .subscribe(listing => {
        console.log(listing);
        this.listing = listing;
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
