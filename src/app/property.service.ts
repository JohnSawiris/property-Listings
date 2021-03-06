import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Property } from './property.model';

@Injectable()
export class PropertyService {

  properties: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.properties = database.list('properties');
  }

  getProperties() {
    return this.properties;
  }

  addProperty(newProperty: Property) {
    this.properties.push(newProperty);
  }

  getPropertyByKey(propertyId: string) {
    return this.database.object('properties/' + propertyId);
  }

  removeListing(propertyId) {
    this.database.object(`/properties/${propertyId}`).remove();
  }

}
