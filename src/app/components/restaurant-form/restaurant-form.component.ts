import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Restaurant } from '../../models/restaurant.model';
import { RestaurantService } from '../../services/restaurant.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './restaurant-form.component.html',
  styleUrl: './restaurant-form.component.scss'
})
export class RestaurantFormComponent {
  restaurantForm: FormGroup;
  isAdding = true;
  isLoading = false;
  error: string | null = null;

  constructor(
    private restaurantService: RestaurantService,
    private fb: FormBuilder,
    private route: Router
  ) {
    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.restaurantForm.invalid) {
      return;
    }

    const restaurant: Restaurant = this.restaurantForm.value;
    this.isLoading = true;

    if (this.isAdding) {
      this.restaurantService.createRestaurant(restaurant)
        .subscribe({
          next: (restaurant) => {
            alert('Restaurant added successfully!');
            this.restaurantForm.reset();
            this.isLoading = false;
            this.route.navigate(['restaurants'])
            // Handle success, e.g., show success message, reset form
          },
          error: (error) => {
            console.error(error);
            this.isLoading = false;
            this.error = 'Failed to create restaurant';
          }
        });
    } else {
      // Update restaurant logic here
    }
  }

  navigateToHome()
  {
    this.route.navigate(['restaurants'])
  }
}
