import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentItemFormComponent } from './shipment-item-form.component';

describe('ShipmentItemFormComponent', () => {
  let component: ShipmentItemFormComponent;
  let fixture: ComponentFixture<ShipmentItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
