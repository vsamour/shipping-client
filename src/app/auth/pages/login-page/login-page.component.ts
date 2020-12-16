import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthData, ILoginCredentials} from '@core/data';
import {untilDestroyed} from 'ngx-take-until-destroy';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  returnUrl: string;
  constructor(private _auth: AuthData, private _router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._route.queryParams.pipe(
      untilDestroyed(this)
    ).subscribe(
      ({returnUrl}) => {
        console.log(returnUrl);
        if (returnUrl) {
          this.returnUrl = returnUrl;
        }
      }
    )
  }

  ngOnDestroy(): void {
  }

  login(credentials: ILoginCredentials) {
    console.log(credentials);
    this._auth.login(credentials).then(
      () => {
        this._router.navigateByUrl(this.returnUrl);
      }
    ).catch(
      () => {
        console.log('Invalid authentication credentials');
      }
    );
  }
}
