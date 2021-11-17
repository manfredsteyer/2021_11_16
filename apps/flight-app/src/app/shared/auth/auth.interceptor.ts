

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { OAuthStorage } from 'angular-oauth2-oidc';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(
        private storage: OAuthStorage,
        private router: Router) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if (req.url.startsWith('http://www.angular.at/api/')) {
            const headers = req.headers.set('Authorization', 'Bearer ' + this.storage.getItem('access_token'));
            req = req.clone({ headers });
        }

        return next.handle(req).pipe(
            // map(x => new HttpResponse({body: []}))
            // tap(x => console.log('http interceptor', x))
            catchError((err: HttpErrorResponse) => {
                if (err.status === 401 || err.status === 403) {
                    this.router.navigate(['/home', {needsLogin: true}])
                }
                return throwError(err);
                // return of(new HttpResponse({body: []}))
            })
        );
    }


}