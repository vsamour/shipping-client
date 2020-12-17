import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthData} from '../data';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _auth: AuthData, private _router: Router) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    req = this.addAuthenticationToken(req);

    return next.handle(req).pipe(
      catchError(err => {
        if (err.status === 401) {
          this._auth.logout();
          this._router.navigate(['/auth']);
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }

  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    // If we do not have a token yet then we should not set the header.
    // Here we could first retrieve the token from where we store it.
    if (!localStorage.getItem('token')) {

      return request;
    }

    return request.clone({
      headers: request.headers.set('Authorization', `Bearer ${JSON.parse(localStorage.getItem('token'))}`)
    });
  }
}
