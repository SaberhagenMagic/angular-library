import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Users } from "./model/users";

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  private readonly apiRoot = 'https://reqres.in/api';

  constructor( private http: HttpClient ) { }

  getUsers( page: number ): Observable<Users> {
    const params = new HttpParams().set('page', String(page));

    return this.http.get<Users>( `${ this.apiRoot }/users`, { params: params } );
  }
}
