import { Pipe, PipeTransform } from '@angular/core';

import { Listing } from '../models';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Listing[], filter: string) {
    filter = filter ? filter.toLocaleLowerCase() : null;
    return filter ? value.filter((listing: Listing) =>
    listing.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
  }

}
