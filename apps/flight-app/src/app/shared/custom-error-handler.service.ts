import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandler implements ErrorHandler {

  constructor(private router: Router) { }

  handleError(error: unknown): void {
    console.log('error', error);

    setTimeout(_ => this.router.navigate(['/home']),1000);
  }
}
