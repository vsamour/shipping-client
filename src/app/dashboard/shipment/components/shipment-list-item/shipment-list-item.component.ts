import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {IShipment} from '@core/data';
import {faBoxes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shipment-list-item',
  templateUrl: './shipment-list-item.component.html',
  styleUrls: ['./shipment-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ShipmentListItemComponent implements OnInit {
  @Input() shipment: IShipment;
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();
  @Output() send: EventEmitter<string> = new EventEmitter<string>();
  boxesIcon = faBoxes;
  constructor() { }

  ngOnInit(): void {
  }

}
