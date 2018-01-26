import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

import { PropertyService } from '../../property.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
  providers: [PropertyService]
})
export class ListingsComponent implements OnInit {

  properties: FirebaseListObservable<any[]>;
  currentRoute: string = this.route.url;

  constructor(private propertyService: PropertyService, private route: Router) { }

  ngOnInit() {
    this.properties = this.propertyService.getProperties();
  }

  checkItOut(property) {
    this.route.navigate(['listings', property.$key]);
  }

}
