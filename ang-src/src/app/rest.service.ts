import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// Decorators are not valid here.ts(1206) ???

const endpoint = 'http://localhost:3000/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()

export class RestService {

  constructor(private http: HttpClient) { }

  calFactorial(num: any): Observable<any> {
    console.log(num);
    let payload = { 'num': num };
    return this.http.post<any>(endpoint, JSON.stringify(payload), httpOptions).pipe(
      tap((data) => console.log('calculate factorial number for num: ' + num)),
      catchError(this.handleError<any>('calFactorial'))
    );
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
