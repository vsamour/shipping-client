import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentDetailPageComponent } from './shipment-detail-page.component';

describe('ShipmentDetailPageComponent', () => {
  let component: ShipmentDetailPageComponent;
  let fixture: ComponentFixture<ShipmentDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
