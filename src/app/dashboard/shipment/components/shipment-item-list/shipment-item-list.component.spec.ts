import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentItemListComponent } from './shipment-item-list.component';

describe('ShipmentItemListComponent', () => {
  let component: ShipmentItemListComponent;
  let fixture: ComponentFixture<ShipmentItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
