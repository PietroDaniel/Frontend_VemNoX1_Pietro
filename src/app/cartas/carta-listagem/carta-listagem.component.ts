import { Component, OnInit } from '@angular/core';
import { CartasService } from '../../shared/service/cartas.service';
import { Carta } from '../../shared/model/carta';
import { CartaSeletor } from '../../shared/model/seletor/carta.seletor';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carta-listagem',
  templateUrl: './carta-listagem.component.html',
  styleUrl: './carta-listagem.component.scss'
})

export class CartaListagemComponent implements OnInit {

  public cartas: Carta[] = [];
  public seletor: CartaSeletor = new CartaSeletor();

  constructor(private cartaService: CartasService,
              private router : Router) {

  }

  ngOnInit(): void {
    this.consultarTodasCartas();
  }



  excluir(cartaSelecionada: Carta) {
    Swal.fire({
      title: 'Deseja realmente excluir a carta?',
      text: 'Essa ação não poderá ser desfeita.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.cartaService.excluir(cartaSelecionada.id).subscribe(
          resultado => {
            this.pesquisar();
          },
          erro => {
            Swal.fire('Erro!', 'Erro ao excluir carta: ' + erro.error.mensagem, 'error');
          }
        );
      }
    });
  }

  editar(idCartaSelecionada: number) {
    this.router.navigate(['/cartas/detalhe/', idCartaSelecionada]);
  }

  public limpar() {
    this.seletor = new CartaSeletor();
    this.consultarTodasCartas();
  }

  public pesquisar() {
    this.cartaService.listarComSeletor(this.seletor).subscribe(
      resultado => {
        this.cartas = resultado;
      },
      erro => {
        console.error('Erro ao filtrar cartas', erro);
      }
    )
  }

  private consultarTodasCartas() {
    this.cartaService.listarTodas().subscribe(
      resultado => {
        this.cartas = resultado;
      },
      erro => {
        console.error('Erro ao consultar cartas', erro);
      }
    )
  }
}



