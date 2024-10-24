import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, map, mergeMap, retry } from 'rxjs/operators';
import { HttpErrorManagerService } from './http-error-manager.service';
import { environment } from '../../../environments/environment.development';

/**
 * This class manage the http connections with internal REST services. Use the response format {
 *  Code: 'xxxxx',
 *  Body: 'Some Data' (this element is returned if the request is success)
 *  ...
 * }
 */
@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(
    private http: HttpClient,
    private errManager: HttpErrorManagerService
  ) {}

  /**
   * Perform a GET http request
   *
   * @returns Observable<any>
   */
  get(path: string, endpoint: string) {
    return this.http
      .get<any>(`${path}${endpoint}`)
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError(this.errManager.handleError.bind(this))
      );
  }

  /**
   * Perform a POST http request
   *
   * @param path service's path from environment end-point
   * @param endpoint service's end-point
   * @param element data to send as JSON
   * @returns Observable<any>
   */
  post(element: any) {
    // return this.header$.pipe(
    //   mergeMap((header) => {
    //     return this.http
    //       .post<any>(`${path}${endpoint}`, element, header)
    //       .pipe(catchError(this.errManager.handleError));
    //   })
    // );
  }

  /**
   * Perform a PUT http request
   *
   * @param path service's path from environment end-point
   * @param endpoint service's end-point
   * @param element data to send as JSON, With the id to UPDATE
   * @returns Observable<any>
   */
  put(element: any, id: number) {
    // return this.header$.pipe(
    //   mergeMap((header) => {
    //     return this.http
    //       .put<any>(`${path}${endpoint}/${id}`, element, header)
    //       .pipe(catchError(this.errManager.handleError));
    //   })
    // );
  }

  /**
   * Perform a DELETE http request
   *
   * @param path service's path from environment end-point
   * @param endpoint service's end-point
   * @param id element's id for remove
   * @returns Observable<any>
   */
  delete(id: number) {
    // return this.header$.pipe(
    //   mergeMap((header) => {
    //     return this.http
    //       .delete<any>(`${path}${endpoint}/${id}`, header)
    //       .pipe(catchError(this.errManager.handleError));
    //   })
    // );
  }
}
