import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Carro } from "../model/carro";

@Injectable({
  providedIn: 'root'
})

export class CarroSerivce {

  consultarComFiltro(filtro: any): Observable<Array<Carro>> {
    return this.httpClient.get<Array<Carro>>(this.API + '/filtro');
  }

  private readonly API = 'http://localhost:8080/senac-20241-backend-exemplos/rest/carros';

  constructor(private httpClient: HttpClient) { }

}
