import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ILoginCredentials} from '@core/data';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() login: EventEmitter<ILoginCredentials> = new EventEmitter<ILoginCredentials>();

  loginForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.loginForm = _fb.group({
      email: ['admin33@gmail.com', [Validators.email, Validators.required]],
      password: ['123', [Validators.required]]
    })
  }

  ngOnInit(): void {

  }

  authenticate({email, password}) {
    this.login.emit({email, password});
  }

}
