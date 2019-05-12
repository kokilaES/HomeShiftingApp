import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import City from '../Model/Cities';

@Injectable({
  providedIn: 'root'
})
export class CitiesServiceService {

  private url = 'https://api.myjson.com/bins/144a6m';
  constructor(private http:HttpClient) {
  }

  getCities(): Observable<City[]>{
    console.log("inside cities");
    return this.http.get<City[]>(this.url).pipe(
      catchError(this.handleError("getCities",[]))
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
