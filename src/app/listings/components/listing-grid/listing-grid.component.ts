import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Ng2PaginationModule} from 'ng2-pagination'; // <-- import the module

import { Listing } from '../../../shared/models';

@Component({
  selector: 'app-listing-grid',
  templateUrl: './listing-grid.component.html',
  styleUrls: ['./listing-grid.component.css']
})
export class ListingGridComponent implements OnInit {
  @Input() listings: Listing[];
  @Input() searchTerm: string;

  constructor() { }

  ngOnInit() {
  }

}
