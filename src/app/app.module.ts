import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//firebase modules
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//import routing
import { routing } from './app.routing';

//import API key
import { firebaseApiKey } from './api-key';

// import components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { RemoveListingComponent } from './components/remove-listing/remove-listing.component';
import { AdminComponent } from './components/admin/admin.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';

//Configure firebase
export const firebaseConfig = {
  apiKey: firebaseApiKey.apiKey,
  authDomain: firebaseApiKey.authDomain,
  databaseURL: firebaseApiKey.databaseURL,
  storageBucket: firebaseApiKey.storageBucket
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListingsComponent,
    AddListingComponent,
    RemoveListingComponent,
    AdminComponent,
    PropertyDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
