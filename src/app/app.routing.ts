import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import components
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { AdminComponent } from './components/admin/admin.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';

const appRouting: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'listings',
    component: ListingsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'listings/:id',
    component: PropertyDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouting);
