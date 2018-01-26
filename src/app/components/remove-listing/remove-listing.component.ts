import { Component, OnInit, Input } from '@angular/core';

import { PropertyService } from '../../property.service';

@Component({
  selector: 'app-remove-listing',
  templateUrl: './remove-listing.component.html',
  styleUrls: ['./remove-listing.component.css'],
  providers: [PropertyService]
})
export class RemoveListingComponent implements OnInit {

  @Input() propertyKey: string;

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    console.log(this.propertyKey.$key);
  }

  removeListing(this.propertyKey) {
    this.propertyService.removeListing(this.propertyKey.$key);
  }

}
