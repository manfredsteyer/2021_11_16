

import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, EMPTY, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CustomPreloadStrategy implements PreloadingStrategy {
    preload(route: Route, load: () => Observable<any>): Observable<any> {

        if (route.data?.preload) {
            return load();
        }

        return of(null);

        // return of(true).pipe(delay(7000), switchMap(() => load()));

    }
}