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
    getProductos(): Observable<any> {
      return this.http.get(`${servidor}/getProductos`);
    }
    postDiscount(porcentaje: number ,mincompra: number, descripcion: string)
    {
      return this.http.post(
        `${servidor}/postDiscount`,
        {
          porcentaje,
          mincompra,
          descripcion,
          "status": false
        },
        httpOptions
      );
    }
    mod_mesaStatus(mesa: number)
    {
      return this.http.post(
        `${servidor}/mod_mesaStatus`,
        {
          mesa
        },
        httpOptions
      );
    }
}