import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { StatusModel } from '../models';

@Injectable()
export class StatusService {
  status: FirebaseListObservable<StatusModel[]>;

  constructor( private _af: AngularFire ) {}

  getStatus() {
    this.status = this._af.database.list('/status') as FirebaseListObservable<StatusModel[]>;
    return this.status;
  }

}
