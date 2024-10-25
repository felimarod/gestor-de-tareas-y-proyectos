import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorManagerService {
  constructor() {}

  public handleError(error: HttpErrorResponse): Observable<never> {
    const errorMessage =
      error.error instanceof ErrorEvent
        ? `Client-side error: ${error.error.message}`
        : `Backend error\nStatus code: ${
            error.status || 'Unknown'
          }, Body: ${JSON.stringify(error.error)}`;

    console.error(errorMessage);

    return throwError(() => new Error(errorMessage)); // Asegúrate de que esta línea funcione
  }
}
