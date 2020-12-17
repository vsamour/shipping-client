import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {IShipment} from '@core/data';

@Component({
  selector: 'app-shipment-detail',
  templateUrl: './shipment-detail.component.html',
  styleUrls: ['./shipment-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShipmentDetailComponent implements OnInit {
  @Input() shipment: IShipment;
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();
  @Output() send: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
