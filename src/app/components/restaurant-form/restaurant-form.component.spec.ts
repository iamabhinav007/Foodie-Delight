import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFormComponent } from './restaurant-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RestaurantService } from '../../services/restaurant.service';

describe('RestaurantFormComponent', () => {
  let component: RestaurantFormComponent;
  let fixture: ComponentFixture<RestaurantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantFormComponent,HttpClientTestingModule],
      providers: [RestaurantService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
