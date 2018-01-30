import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  toggleDisplay: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.toggleDisplay = !this.toggleDisplay;
  }

}
