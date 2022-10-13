import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, retry} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // change header
    const clone = request.clone({
      setHeaders:{
        Authorization: 'ABC auth',
        method: 'POST'
      }
    })
    console.log(clone)
    return next.handle(clone).pipe(
      retry(0),
      catchError((error: HttpErrorResponse) => {
        console.log(error)
        throw error;
      })
    );
  }
}

