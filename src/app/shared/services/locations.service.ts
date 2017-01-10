import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { LocationModel } from '../models/location.model';

@Injectable()
export class LocationsService {
  locations: FirebaseListObservable<LocationModel[]>;

  constructor(
   private _af: AngularFire
  ) { }

  getLocations() {
    this.locations = this._af.database.list('/location') as FirebaseListObservable<LocationModel[]>;
    return this.locations;
  }
}
