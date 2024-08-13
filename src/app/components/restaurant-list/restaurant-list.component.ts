import { Component } from '@angular/core';
import { Restaurant } from '../../models/restaurant.model';
import { RestaurantService } from '../../services/restaurant.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.scss'
})
export class RestaurantListComponent {
  restaurants: Restaurant[] = [];
   isLoading = false;
   error: string | null = null;
   expandedRestaurantId: number | null = null;
 
   constructor(private restaurantService: RestaurantService,private router:Router) {}
 
   ngOnInit() {
     this.getRestaurants();
   }
 
   getRestaurants() {
     this.isLoading = true;
     this.restaurantService.getRestaurants()
       .subscribe({
         next: (restaurants) => {
           this.restaurants = restaurants;
           this.isLoading = false;
         },
         error: (error) => {
           console.error(error);
           this.isLoading = false;
           this.error = 'Failed to load restaurants';
         }
       });
   }
   toggleDetail(restaurantId: number) {
    this.expandedRestaurantId = this.expandedRestaurantId === restaurantId ? null : restaurantId;
  }
  deleteRestaurant(restaurantId: number, event: Event) {
    event.stopPropagation(); // Prevent triggering the row click event
    // Logic for deleting the restaurant
    this.restaurantService.deleteRestaurant(restaurantId).subscribe((res)=>
    {
     this.restaurants= this.restaurants.filter((val)=>{
        return val.id != restaurantId
      })
    })
  }
  viewRestaurant(restaurantId: number) {
    this.router.navigate(['/restaurants', restaurantId]);
  }

  addRestaurant(){
    this.router.navigate(['add-restaurant'])
  }
}
