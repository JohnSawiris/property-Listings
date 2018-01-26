import { Component, OnInit } from '@angular/core';

import { PropertyService } from '../../property.service';
import { Property } from '../../property.model';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css'],
  providers: [PropertyService]
})
export class AddListingComponent implements OnInit {

  toggle: boolean = true;

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
  }

  toggleDisplay() {
    this.toggle = !this.toggle;
  }

  addListing(owner: string, title: string, bedrooms: number, city: string, price: string, type: string) {
    const newProperty: Property = new Property(owner, title, bedrooms, city, price, type);
    console.log(newProperty)
    this.propertyService.addProperty(newProperty);
  }

}
