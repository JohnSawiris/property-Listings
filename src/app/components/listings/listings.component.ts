import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { PropertyService } from '../../property.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
  providers: [PropertyService]
})
export class ListingsComponent implements OnInit {

  properties: FirebaseListObservable<any[]>;

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.properties = this.propertyService.getProperties();
  }

}
