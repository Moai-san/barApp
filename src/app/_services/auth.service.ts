import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const servidor = "http://backend-barapp-tst.herokuapp.com";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(rut: string, uname: string, password: string, celular: number): Observable<any> {
    return this.http.post(
      `${servidor}/regUser`,
      {
        rut,
        uname,
        password,
        celular
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(servidor + '/signout', { }, httpOptions);
  }

  login(uname: string, password: string): Observable<any> {
    return this.http.post(
      `${servidor}/logIn`,
      {
        uname,
        password
      },
      httpOptions
    );
  }
}
