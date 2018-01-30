import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthenticationService]
})
export class NavbarComponent implements OnInit {
  user; // it doesn't have a type bc it's delcared in the service
  private isLoggedIn: boolean;
  private userName: string;
  toggleDisplay: boolean = true;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe(user => {
      if(user === null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    }); // subscribe to return the latest value emitted
  }

  ngOnInit() {
  }

  toggle() {
    this.toggleDisplay = !this.toggleDisplay;
  }

  login() {
    this.authenticationService.login();
  }

  logout() {
    this.authenticationService.logout();
  }

}
