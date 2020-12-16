import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AuthData, ILoginCredentials, ILoginResponse, IUser} from '../data';

@Injectable()
export class AuthService extends AuthData {
  user$: Observable<IUser>;
  private _userSubject: BehaviorSubject<IUser>;

  constructor(private _http: HttpClient) {
    super();

    this._userSubject = new BehaviorSubject<IUser>(AuthService._fromLS('user') || null);
    this.user$ = this._userSubject.asObservable();

  }

  private static _toLS(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  private static _delFromLS(key: string) {
    localStorage.removeItem(key);
  }

  private static _fromLS(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  async login(credential: ILoginCredentials): Promise<IUser> {
    let result = await this._http.post<ILoginResponse>(`${environment.url}/login`, {
      email: credential.email,
      password: credential.password
    }).pipe(
      map(
        (({data: [{token}]}) => {
          let user: IUser = {
            email: credential.email
          };
          this._userSubject.next(user);
          AuthService._toLS('token', token);
          AuthService._toLS('user', user);
          return user;
        })
      ),
      catchError(error => {
        this.logout();
        throw error
      })
    ).toPromise();
    return result;
  }

  logout(): void {
    this._userSubject.next(null);
    AuthService._delFromLS('user');
    AuthService._delFromLS('token')
  }
}
