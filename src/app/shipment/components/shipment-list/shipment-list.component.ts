import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {IShipment} from '@core/data';

@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShipmentListComponent implements OnInit {
  @Input() shipments: IShipment[];
  constructor() { }

  ngOnInit(): void {
  }

}
