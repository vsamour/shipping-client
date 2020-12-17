import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentItemEditPageComponent } from './shipment-item-edit-page.component';

describe('ShipmentItemEditPageComponent', () => {
  let component: ShipmentItemEditPageComponent;
  let fixture: ComponentFixture<ShipmentItemEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentItemEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentItemEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
