import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorManagerService {
  constructor() {}

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,

      console.error(
        `Backend returned code ${error.status ? error.status : 'no code'}, ` +
          `body was: ${JSON.stringify(error.error)}`
      );
    }
    // return an observable with a user-facing error message
    return throwError({
      status: error.status ? error.status : 'Error',
      message: 'Something bad happened; please try again later.',
      error: error.error,
    });
  }
}
