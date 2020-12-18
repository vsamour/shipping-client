import {Location} from '@angular/common';
import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {IShipment, IShipmentResponse, ShipmentData} from '@core/data';
import {IShipmentInput} from '@core/data/shipment';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {distinctUntilChanged, tap} from 'rxjs/operators';

@Component({
  selector: 'app-shipment-edit-page',
  templateUrl: './shipment-edit-page.component.html',
  styleUrls: ['./shipment-edit-page.component.scss']
})
export class ShipmentEditPageComponent implements OnInit, OnDestroy {
  shipmentId: string;
  shipment: IShipment;
  constructor(private _route: ActivatedRoute, private _shipment: ShipmentData, private _location: Location) {
  }

  ngOnInit(): void {
    this._route.paramMap.pipe(
      untilDestroyed(this),
      distinctUntilChanged(),
      tap((params: ParamMap) => {
        console.log(params);
        this.shipmentId = params.get('id');
        if(this.shipmentId) {
          this._shipment.getOne(this.shipmentId).then(
            (data) => {
              this.shipment = data;
            }
          );
        }
      })
    ).subscribe()
  }
  ngOnDestroy(): void {
  }

  back() {
    this._location.back();
  }

  create(data: IShipmentInput) {
    if (!this.shipmentId) {

      this._shipment.createOne(data).then(() => this.back());
    }
    this._shipment.updateOne(data).then(() => this.back());
  }
}
