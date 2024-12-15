import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCabsComponent } from './list-cabs/list-cabs.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { SearchCabComponent } from './search-cab/search-cab.component';
import { ListBookingsComponent } from './list-bookings/list-bookings.component';
import { BookcabComponent } from './bookcab/bookcab.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route for Home page
  { path: 'list-cabs', component: ListCabsComponent }, // Displays list of cabs
  { path: 'list-users', component: ListUsersComponent }, // Form to create a new user
  { path: 'list-bookings', component: ListBookingsComponent }, // Form to create a new booking
  { path: 'search', component: SearchCabComponent },
  { path: 'book-cab', component: BookcabComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Wildcard route for handling unknown paths
];
