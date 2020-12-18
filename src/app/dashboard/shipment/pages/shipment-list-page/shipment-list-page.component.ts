import {Component, OnInit} from '@angular/core';
import {IShipment, ShipmentData} from '@core/data';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-shipment-list-page',
  templateUrl: './shipment-list-page.component.html',
  styleUrls: ['./shipment-list-page.component.scss']
})
export class ShipmentListPageComponent implements OnInit {
  shipments$: Observable<IShipment[]>;

  constructor(private _shipment: ShipmentData) {
  }

  ngOnInit(): void {
    this.shipments$ = this._shipment.data$;
    this._shipment.getAll();
  }

}
