import {Location} from '@angular/common';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-container',
  templateUrl: './navigation-container.component.html',
  styleUrls: ['./navigation-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationContainerComponent implements OnInit {
  backIcon = faArrowLeft;
  forwardIcon = faArrowRight;
  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  back() {
    this._location.back()
  };

  forward() {
    this._location.forward();
  }
}
