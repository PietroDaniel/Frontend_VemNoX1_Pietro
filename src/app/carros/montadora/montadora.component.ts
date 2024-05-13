
import { Component, OnInit } from '@angular/core';
import { Montadora } from '../../shared/model/montadora';
import { MontadoraService } from '../../shared/service/montadora.service';
import { Carro } from '../../shared/model/carro';

@Component({
  selector: 'app-montadora',
  templateUrl: './montadora.component.html',
  styleUrl: './montadora.component.scss'
})

export class MontadoraComponent implements OnInit {

  public montadoras: Montadora[] = [];
  public carros: Carro[] = [];

  constructor(private montadoraService: MontadoraService) { }


  ngOnInit(): void {
    this.consultarTodas();
  }

  private consultarTodas() {
    this.montadoraService.consultarTodas().subscribe(
      resultado => {
        this.montadoras = resultado;
      },
      erro => {
        console.error('Erro ao consultar montadoras');
      }
    )
  }


  public selectedMontadora: number;

consultarEstoque() {
  if (this.selectedMontadora) {
    this.montadoraService.consultarEstoqueCarros(this.selectedMontadora).subscribe(
      totalCarros => {
        alert(`Total de veículos: ${totalCarros}`);
      },
      erro => {
        console.error('Erro ao consultar estoque de carros', erro);
        alert(erro.message);
      }
    )
  } else {
    alert("Selecione uma montadora");
  }
}

  /*private consultarEstoqueCarros() {
    this.montadoraService.consultarEstoqueCarros().subscribe(
      resultado => {
        this.carros = resultado;
      },
      erro => {
        console.error('Erro ao consultar montadoras');
      }
    )
  }*/

}
