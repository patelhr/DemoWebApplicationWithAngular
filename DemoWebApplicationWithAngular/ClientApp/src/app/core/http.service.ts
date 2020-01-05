import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable()

export class HttpService {

  constructor(private readonly http: HttpClient) {
  }

  get<T>(url: string) {
    return this.http.get<T>(url).pipe(catchError(this.handleError));
  }

  post<T>(url: string, body: any) {
    return this.http.post<T>(url, body).pipe(catchError(this.handleError));
  }


  put<T>(url: string, body: any) {
    return this.http.put<T>(url, body).pipe(catchError(this.handleError));
  }

  delete(url: string) {
    return this.http.delete(url).pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      location.href = '/';
    } else if (error.status === 400) {
      return throwError(error);
    } else {
      return throwError(error);
    }
    return throwError(error);
  }
}
