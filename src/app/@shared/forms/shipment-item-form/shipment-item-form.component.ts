import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IItem} from '@core/data';

@Component({
  selector: 'app-shipment-item-form',
  templateUrl: './shipment-item-form.component.html',
  styleUrls: ['./shipment-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShipmentItemFormComponent implements OnInit {
  @Input() set shipmentId(id: string) {
    this.form.get('shipment_id').setValue(id);
  }
  @Output() create: EventEmitter<IItem> = new EventEmitter<IItem>();

  form: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      'id': [],
      'shipment_id': [this.shipmentId],
      'name': [],
      'code': []
    })
  }

  ngOnInit(): void {
  }

}
