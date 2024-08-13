import { Routes } from '@angular/router';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'restaurants', pathMatch: 'full'
    },
    {
        path: 'restaurants', component: RestaurantListComponent
    },
    { path: 'restaurants/:id', component: RestaurantDetailComponent },
    { path: 'add-restaurant', component: RestaurantFormComponent },
    { path: '**', redirectTo: 'restaurants' }
];
