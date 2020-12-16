import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {IShipment} from '@core/data';

@Component({
  selector: 'app-shipment-list-item',
  templateUrl: './shipment-list-item.component.html',
  styleUrls: ['./shipment-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShipmentListItemComponent implements OnInit {
  @Input() shipment: IShipment;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() send: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

}
