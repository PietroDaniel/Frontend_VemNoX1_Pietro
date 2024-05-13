import { Component, OnInit } from '@angular/core';
import { JogadoresService } from '../../shared/service/jogadores.service';
import { Jogador } from '../../shared/model/jogador';

@Component({
  selector: 'app-jogador-listagem',
  templateUrl: './jogador-listagem.component.html',
  styleUrl: './jogador-listagem.component.scss'
})
export class JogadorListagemComponent implements OnInit{

  public jogador: Jogador[] = [];

  constructor(private JogadoresService: JogadoresService) {}

  ngOnInit(): void {
    this.listarTodosJogadores();
  }

  private listarTodosJogadores() {
    this.JogadoresService.listarTodosJogadores().subscribe(
      resultado => {
        this.jogador = resultado;
      },
      erro => {
        console.error('Erro ao listar jogadores', erro);
      }
    );
  }

}

