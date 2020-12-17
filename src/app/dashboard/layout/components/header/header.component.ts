import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {IUser} from '@core/data';
import {faUserCircle} from '@fortawesome/free-regular-svg-icons';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() user: IUser;
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();
  signOutIcon = faSignOutAlt;
  userIcon = faUserCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
