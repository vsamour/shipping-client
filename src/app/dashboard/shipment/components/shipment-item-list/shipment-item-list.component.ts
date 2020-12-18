import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {IItem} from '@core/data';

@Component({
  selector: 'app-shipment-item-list',
  templateUrl: './shipment-item-list.component.html',
  styleUrls: ['./shipment-item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShipmentItemListComponent implements OnInit {
  @Input() items: IItem[];
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
