import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { AuthService } from './auth.service';
import { Listing } from '../models/listing.model';




@Injectable()
export class ListingsService {
  listings: FirebaseListObservable<Listing[]>;
  listing: FirebaseObjectObservable<Listing>;

  constructor(
    private _af: AngularFire,
    private _auth: AuthService
  ) {
  }


  getListing(arg: String = null): Observable<Listing[]> {
    if (arg !== null) {
      this.listings = this._af.database.list('/listings', {
        query: {
          orderByChild: 'type',
          equalTo: arg
        }
      }) as FirebaseListObservable<Listing[]>;
    } else {
      this.listings = this._af.database.list('/listings') as FirebaseListObservable<Listing[]>;
    }
    return this.listings;
  }




  getListingByStatus(arg: string = null) {
    this.listings = this._af.database.list('/listings', {
      query: {
        orderByChild: 'status',
        equalTo: arg,
      }
    }) as FirebaseListObservable<Listing[]>;
    return this.listings;
  }

  getSingleListing($key: string ) {
    return this._af.database.object('/listings/' + $key);
  }

  addListing(newListing) {
    return this.listings.push(newListing);
  }

  updateListing(key, updListing) {
    return this.listings.update(key, updListing);
  }


}
