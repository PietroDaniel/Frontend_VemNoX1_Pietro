import { Component, OnInit } from '@angular/core';
import { Carro } from '../../shared/model/carro';
import { CarroSerivce } from '../../shared/service/carros.service';

@Component({
  selector: 'app-carro-listagem',
  templateUrl: './carro-listagem.component.html',
  styleUrl: './carro-listagem.component.scss'
})
export class CarroListagemComponent implements OnInit {

  public carros: Carro[] = [];

  constructor(private carroSerivce: CarroSerivce) { }

  ngOnInit(): void {
    this.consultarComFiltro({ marca: '', modelo: '', anoInicio: null, anoFim: null });;
  }
  
  public filtroForm = {
    marca: '',
    modelo: '',
    anoInicio: null,
    anoFim: null
  };

  /*Revisar*/
  consultarComFiltro(filtro: any) {
    this.carroSerivce.consultarComFiltro(filtro).subscribe(
      resultado => {
        this.carros = resultado;
        if (resultado.length === 0) {
          alert("Nenhum veículo encontrado");
        }
      },
      erro => {
        console.error('Erro ao consultar carros', erro);
        alert(erro.message);
      }
    )
  }
}


