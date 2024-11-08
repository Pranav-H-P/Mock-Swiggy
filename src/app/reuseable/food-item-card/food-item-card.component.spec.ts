import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemCardComponent } from './food-item-card.component';

describe('FoodItemCardComponent', () => {
  let component: FoodItemCardComponent;
  let fixture: ComponentFixture<FoodItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodItemCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
