import 'rxjs/add/observable/throw';

import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { AppState } from 'app/store/states/app.state';
import { AddNotification } from 'app/store/actions/user.action';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private readonly store$: Store<AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error, caught) => {
        if (error instanceof HttpErrorResponse) {
          const httpError: HttpErrorResponse = error;
          console.log(
            `Es ist ein Fehler beim Zugriff auf '${req.url}' aufgetreten: ${httpError.message}`
          );
        }

        // return the error to the method that called it
        return Observable.throw(error);
      })
    );
  }
}
