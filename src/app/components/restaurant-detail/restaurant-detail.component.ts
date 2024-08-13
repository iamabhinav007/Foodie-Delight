import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../../models/restaurant.model';
import { RestaurantService } from '../../services/restaurant.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-detail',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './restaurant-detail.component.html',
  styleUrl: './restaurant-detail.component.scss'
})
export class RestaurantDetailComponent {
  restaurant: Restaurant | null = null;
   isLoading = false;
   error: string | null = null;
 
   constructor(
     private restaurantService: RestaurantService,
     private route: ActivatedRoute
   ) {}
 
   ngOnInit() {
     this.isLoading = true;
     this.route?.params?.subscribe(params => {
       const id = params['id'];
       this.restaurantService?.getRestaurant(id)
         .subscribe({
           next: (restaurant) => {
             this.restaurant = restaurant;
             this.isLoading = false;
           },
           error: (error) => {
             console.error(error);
             this.isLoading = false;
             this.error = 'Failed to load restaurant';
           }
         });
     });
   }
}
