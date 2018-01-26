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

}
