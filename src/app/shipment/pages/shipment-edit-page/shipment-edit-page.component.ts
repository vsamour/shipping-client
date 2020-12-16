import {Location} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ShipmentData} from '@core/data';
import {IShipmentInput} from '@core/data/shipment';

@Component({
  selector: 'app-shipment-edit-page',
  templateUrl: './shipment-edit-page.component.html',
  styleUrls: ['./shipment-edit-page.component.scss']
})
export class ShipmentEditPageComponent implements OnInit {
  form: FormGroup;

  constructor(private _fb: FormBuilder, private _shipment: ShipmentData, private _location: Location) {
    this.form = this._fb.group({
      'id': ['', [Validators.required]],
      'name': ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  back() {
    this._location.back();
  }

  create(data: IShipmentInput) {
    this._shipment.createOne(data);
  }
}
