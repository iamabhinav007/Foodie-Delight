import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailComponent } from './restaurant-detail.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('RestaurantDetailComponent', () => {
  let component: RestaurantDetailComponent;
  let fixture: ComponentFixture<RestaurantDetailComponent>;
  let restaurantService: jasmine.SpyObj<RestaurantService>;

  beforeEach(async () => {
    const restaurantServiceSpy = jasmine.createSpyObj('RestaurantService', ['getRestaurant']);
    const activatedRouteSpy = { params: of({ id: '1' }) }; 
    await TestBed.configureTestingModule({
      imports: [RestaurantDetailComponent,RouterModule,HttpClientTestingModule],
      providers: [
        { provide: RestaurantService, useValue: restaurantServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: '1' } } }
        }
      ]
    })
    .compileComponents();
    restaurantService = TestBed.inject(RestaurantService) as jasmine.SpyObj<RestaurantService>;
    
    fixture = TestBed.createComponent(RestaurantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
