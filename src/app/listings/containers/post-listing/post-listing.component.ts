import { ListingType } from '../../../shared/models';
import { StatusModel } from '../../../shared/models';
import { ListingTypeService } from '../../../shared/services';
import { ListingsService } from '../../../shared/services';
import { StatusService } from '../../../shared/services';
import { Listing } from '../../../shared/models';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.css']
})
export class PostListingComponent implements OnInit {

  listing: FormGroup;
  listingTypes: ListingType [];
  status: StatusModel [];

  constructor(
    public listingservice: ListingsService,
    public listingtypeservice: ListingTypeService,
    public statusservice: StatusService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.listing = this.fb.group({
      name: [''],
      type: ['', Validators.required],
      status: ['', Validators.required],
      owner: [''],
      price: ['', Validators.required],
      description: [''],
      location: ['', Validators.required],
      date:  Date.now(),
      image1: [''],
      image2: [''],
      image3: ['']
    })

    this.listingtypeservice.getTypes()
     .subscribe(listingTypes => {
       this.listingTypes = listingTypes;
     });

     this.statusservice.getStatus()
      .subscribe(status => {
        this.status = status;
      });

  }


  onSubmit({ value, valid }: {value: Listing, valid: boolean }){
    this.listingservice.addListing(value);
  }
}
