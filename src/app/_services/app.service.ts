import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const servidor = "https://backend-barapp-tst.herokuapp.com";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})

export class AppService
{
    constructor(private http: HttpClient) {}
    getMesas(): Observable<any> {
      return this.http.get(`${servidor}/getMesas`);
    }
}