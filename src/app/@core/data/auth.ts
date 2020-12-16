import {Observable} from 'rxjs';

export interface IUser {
  email: string
}

export interface ILoginCredentials extends IUser{
  password: string
}

export interface ILoginResponse {
  data: [{
      token: string
    }]
}

export abstract class AuthData {
  abstract user$: Observable<IUser>;
  abstract login(credentials: ILoginCredentials): Promise<IUser>;
  abstract logout(): void;
}
