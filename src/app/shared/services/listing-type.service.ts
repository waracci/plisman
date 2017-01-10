import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { ListingType } from '../models/listing-type.model';

@Injectable()
export class ListingTypeService {
  listingTypes: FirebaseListObservable<ListingType[]>;

  constructor( private _af: AngularFire ) {}

  getTypes() {
    this.listingTypes = this._af.database.list('/listings-types') as FirebaseListObservable<ListingType[]>;
    return this.listingTypes;
  }

}
