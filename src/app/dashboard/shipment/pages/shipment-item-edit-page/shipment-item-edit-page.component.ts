import {Location} from '@angular/common';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {IItem, ItemData} from '@core/data';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {distinctUntilChanged, tap} from 'rxjs/operators';

@Component({
  selector: 'app-shipment-item-edit-page',
  templateUrl: './shipment-item-edit-page.component.html',
  styleUrls: ['./shipment-item-edit-page.component.scss']
})
export class ShipmentItemEditPageComponent implements OnInit, OnDestroy {
  shipmentId: string;
  itemId: string;
  item: IItem;
  constructor(private _route: ActivatedRoute, private _location: Location, private _item: ItemData) { }

  ngOnInit(): void {
    this._route.paramMap.pipe(
      untilDestroyed(this),
      distinctUntilChanged(),
      tap((params: ParamMap) => {
        this.shipmentId = params.get('id');
        this.itemId = params.get('itemId');
        if (this.itemId) {
          this._item.getOne(this.itemId).then(
            (item) => {
              this.item = item
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

  create(item: IItem) {
    this._item.createOne(item).then(() => this.back());
  }
}
