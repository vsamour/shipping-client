import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentEditPageComponent } from './shipment-edit-page.component';

describe('ShipmentEditPageComponent', () => {
  let component: ShipmentEditPageComponent;
  let fixture: ComponentFixture<ShipmentEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
