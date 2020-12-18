import {Location} from '@angular/common';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {IShipment, ItemData, ShipmentData} from '@core/data';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {distinctUntilChanged, tap} from 'rxjs/operators';

@Component({
  selector: 'app-shipment-detail-page',
  templateUrl: './shipment-detail-page.component.html',
  styleUrls: ['./shipment-detail-page.component.scss']
})
export class ShipmentDetailPageComponent implements OnInit, OnDestroy {
  shipment: IShipment;
  id: number;

  constructor(private _route: ActivatedRoute, private _shipment: ShipmentData, private _item: ItemData, private _location: Location) {
  }

  ngOnInit(): void {
    this._route.paramMap.pipe(
      untilDestroyed(this),
      distinctUntilChanged(),
      tap((params: ParamMap) => {
        console.log(params);
        this._shipment.getOne(params.get('id')).then(
          (shipment) => {
            this.shipment = shipment
          }
        );
      })
    ).subscribe()
  }

  send(id: string) {
    this._shipment.send(id).then(() => this.back());
  }

  delete(id: string) {
    this._shipment.deleteOne(id).then(() => this.back());
  }
  deleteItem(id: string) {
    this._item.deleteOne(id).then(() => this.back());
  }

  back() {
    this._location.back()
  }

  ngOnDestroy(): void {
  }
}
