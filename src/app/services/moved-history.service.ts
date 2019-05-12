import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {History} from '../Model/History';


@Injectable({
  providedIn: 'root'
})
export class MovedHistoryService {

  private url = 'http://localhost:4200/api/histories';

  constructor(
    private http:HttpClient,
  ) { }

  getMovedHistories():Observable<History[]>{
    console.log("inside moved historu")
    return this.http.get<History[]>(this.url).pipe(
      catchError(this.handleError('getHistory',[]))
    );
  }

  getProgress(id):Observable<History>{
    const url = `${this.url}/?id=${id}`;
    return this.http.get<History>(url)
      .pipe(
        map(history => history[0]), // returns a {0|1} element array
        catchError(this.handleError(`getHero id=${id}`,[]))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
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
