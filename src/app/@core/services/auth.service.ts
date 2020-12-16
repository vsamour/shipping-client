import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthData, ILoginCredentials, ILoginResponse, IUser} from '../data';

@Injectable()
export class AuthService extends AuthData {
  user$: Observable<IUser>;
  private _userSubject: BehaviorSubject<IUser>;

  constructor(private _http: HttpClient) {
    super();

    this._userSubject = new BehaviorSubject<IUser>(AuthService._fromLS() || null);
    this.user$ = this._userSubject.asObservable();

  }

  private static _toLS(user: IUser) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  private static _fromLS() {
    return JSON.parse(localStorage.getItem('user'));
  }

  async login(credential: ILoginCredentials): Promise<IUser> {
    let result = await this._http.post<ILoginResponse>('', {
      email: credential.email,
      password: credential.password
    }).pipe(
      map(
        (value => {

          //should be validation here

          let user: IUser = {
            email: credential.password
          };

          this._userSubject.next(user);
          AuthService._toLS(user);
          return user;
        })
      )
    ).toPromise();
    return result;
  }

  logout(): void {
    this._userSubject.next(null);
    AuthService._toLS(null);
  }
}
