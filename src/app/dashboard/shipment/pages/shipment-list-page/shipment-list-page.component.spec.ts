import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentListPageComponent } from './shipment-list-page.component';

describe('ShipmentListPageComponent', () => {
  let component: ShipmentListPageComponent;
  let fixture: ComponentFixture<ShipmentListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
