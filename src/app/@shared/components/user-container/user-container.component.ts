import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {IUser} from '@core/data';
import {faUserCircle} from '@fortawesome/free-regular-svg-icons';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserContainerComponent implements OnInit {
  @Input() user: IUser;
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();
  signOutIcon = faSignOutAlt;
  userIcon = faUserCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
