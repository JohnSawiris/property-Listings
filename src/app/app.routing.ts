import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import components
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';

const appRouting: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'listings',
    component: ListingsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouting);
