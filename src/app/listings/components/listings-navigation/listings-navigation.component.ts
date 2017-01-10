import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ListingType, StatusModel } from '../../../shared/models';

@Component({
  selector: 'app-listings-navigation',
  templateUrl: './listings-navigation.component.html',
  styleUrls: ['./listings-navigation.component.css']
})
export class ListingsNavigationComponent implements OnInit {
  @Input() listingTypes: ListingType[];
  @Input() status: StatusModel[];
  @Output() newStatus: EventEmitter<string> = new EventEmitter();

  constructor() { }

  setStatus(){
    this.newStatus.emit()
  }

  ngOnInit() {
  }

}
