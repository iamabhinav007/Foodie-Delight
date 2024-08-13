import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantListComponent } from './restaurant-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RestaurantService } from '../../services/restaurant.service';

describe('RestaurantListComponent', () => {
  let component: RestaurantListComponent;
  let fixture: ComponentFixture<RestaurantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantListComponent,HttpClientTestingModule],
      providers: [RestaurantService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
