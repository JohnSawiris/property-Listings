import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PropertyService {

  properties: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.properties = database.list('properties');
  }

  getProperties() {
    return this.properties;
  }
}
