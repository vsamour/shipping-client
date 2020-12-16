import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthData, ILoginCredentials} from '@core/data';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private _auth: AuthData, private _router: Router) {
  }

  ngOnInit(): void {
  }

  login(credentials: ILoginCredentials) {
    console.log(credentials);
    this._auth.login(credentials).then(
      () => {
        this._router.navigate(['/']);
      }
    ).catch(
      () => {
        console.log('Invalid authentication credentials');
      }
    );
  }
}
