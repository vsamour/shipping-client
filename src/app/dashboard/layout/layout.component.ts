import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthData, IUser} from '@core/data';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user$: Observable<IUser>;
  constructor(private _auth: AuthData, private _router: Router) { }

  ngOnInit(): void {
    this.user$ = this._auth.user$;
  }
  logout() {
    this._auth.logout();
    this._router.navigate(['/auth'])
  }
}
