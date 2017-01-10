import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Listing } from '../../../shared/models';

@Component({
  selector: 'app-listing-grid',
  templateUrl: './listing-grid.component.html',
  styleUrls: ['./listing-grid.component.css']
})
export class ListingGridComponent implements OnInit {
  @Input() listings: Listing[];
  
  constructor() { }

  ngOnInit() {
  }

}
