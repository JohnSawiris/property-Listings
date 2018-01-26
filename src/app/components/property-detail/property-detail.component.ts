import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PropertyService } from '../../property.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
  providers: [PropertyService]
})
export class PropertyDetailComponent implements OnInit {

  propertyKey: string;
  propertyToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private propertyService: PropertyService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters)=> {
      this.propertyKey = urlParameters['id'];
    });
    this.propertyToDisplay = this.propertyService.getPropertyByKey(this.propertyKey);
  }

}
