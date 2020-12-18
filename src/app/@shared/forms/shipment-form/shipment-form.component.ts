import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IShipment} from '@core/data';

@Component({
  selector: 'app-shipment-form',
  templateUrl: './shipment-form.component.html',
  styleUrls: ['./shipment-form.component.scss']
})
export class ShipmentFormComponent implements OnInit {
  shipmentId: string;
  @Input() set shipement(data: IShipment) {
    console.log(data);
    if(data) {
      this.shipmentId = data.id;
      this.form.get('id').setValue(data.id);
      this.form.get('name').setValue(data.name);
    }
  }
  @Output() create: EventEmitter<IShipment> = new EventEmitter<IShipment>();
  form: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
    'id': ['', [Validators.required]],
    'name': ['', [Validators.required]]
  })}

  ngOnInit(): void {
  }

}
