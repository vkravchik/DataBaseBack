import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {AutoRoute} from "../model/AutoRoute";
import {AutoGroup} from "../model/AutoGroup";
import {AutoStreet} from "../model/AutoStreet";

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  private rows: AutoRoute[];
  private row: AutoRoute;
  editedRow: AutoRoute;
  newRow: AutoRoute;

  constructor(private http: HttpClient,
              private _error: ErrorService) { }

  getAll(): Observable<AutoRoute[]> {
    return this.http.get(environment.apiUrl + environment.apiRoute + '/all').pipe(
      map((res: AutoRoute[]) => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    );
  }

  getSingle(id: number): Observable<AutoRoute> {
    return this.http.get(environment.apiUrl + environment.apiRoute + '/' + id).pipe(
      map((res: AutoRoute) => {
        this.row = res;
        return this.row;
      }),
      catchError(this._error.handleError)
    )
  }

  update(id: number, item: any): Observable<AutoRoute> {
    let url = environment.apiUrl + environment.apiRoute + '/' + id;

    let body = JSON.stringify(item);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, body, {headers: headers}).pipe(
      map((res: AutoRoute) => {
        this.editedRow = res;
        return this.editedRow;
      }),
      catchError(this._error.handleError)
    )
  }

  delete(id: number): Observable<any> {
    let url = environment.apiUrl + environment.apiRoute + '/' + id;

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.delete(url, {headers: headers}).pipe(
      map(res => {
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

  add(item: any): Observable<AutoRoute> {
    let url = environment.apiUrl + environment.apiRoute + '/add';

    let body = JSON.stringify(item);
    console.log(body);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, {headers: headers}).pipe(
      map((res: AutoRoute) => {
        this.newRow = res;
        return res;
      }),
      catchError(this._error.handleError)
    )
  }
}
