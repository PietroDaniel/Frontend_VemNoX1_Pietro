import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroListagemComponent } from './carro-listagem/carro-listagem.component';
import { MontadoraComponent } from './montadora/montadora.component';

const routes: Routes = [
  { path: 'lista', component: CarroListagemComponent },
  { path: 'montadoras', component: MontadoraComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrosRoutingModule { }
