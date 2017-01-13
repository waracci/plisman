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
  @Input()  searchValue: string;
  @Output() newStatus: EventEmitter<string> = new EventEmitter();
  @Output() newType: EventEmitter<string> = new EventEmitter();
  @Output() searchValueChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  setStatus(value) {
    this.newStatus.emit(value);
    console.log(value);
  }

  setType(value) {
    this.newType.emit(value);
    console.log(value);
  }

  search(value){
    this.searchValue = value;
    this.searchValueChange.emit(value)
  }

  ngOnInit() {
  }

}
