import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentItemEditModalComponent } from './shipment-item-edit-modal.component';

describe('ShipmentItemEditModalComponent', () => {
  let component: ShipmentItemEditModalComponent;
  let fixture: ComponentFixture<ShipmentItemEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentItemEditModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentItemEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
