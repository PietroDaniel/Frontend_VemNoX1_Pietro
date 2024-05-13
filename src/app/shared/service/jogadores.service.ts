import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogador } from '../model/jogador';

@Injectable({
  providedIn: 'root'
})
export class JogadoresService {

  private readonly API ='http://localhost:8080/Backend_VemNoX1_Pietro/rest/jogador';

  constructor(private httpClient : HttpClient) { }

  listarTodosJogadores(): Observable <Array<Jogador>> {
    return this.httpClient.get<Array<Jogador>>(this.API + '/todos');
  }

}
