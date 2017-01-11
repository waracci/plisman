import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ListingType, StatusModel } from '../../../shared/models';
import { AuthService } from '../../../shared/services';

@Component({
  selector: 'app-listings-navigation',
  templateUrl: './listings-navigation.component.html',
  styleUrls: ['./listings-navigation.component.css']
})
export class ListingsNavigationComponent implements OnInit {
  @Input() listingTypes: ListingType[];
  @Input() status: StatusModel[];
  @Output() newStatus: EventEmitter<string> = new EventEmitter();

  constructor(private noauth: AuthService) { }

  setStatus(){
    this.newStatus.emit()
  }

  ngOnInit() {
  }

}
