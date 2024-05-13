import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosRoutingModule } from './carros-routing.module';
import { CarroListagemComponent } from './carro-listagem/carro-listagem.component';
import { MontadoraComponent } from './montadora/montadora.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarroListagemComponent,
    MontadoraComponent
  ],
  imports: [
    CommonModule,
    CarrosRoutingModule,
    FormsModule
  ]
})
export class CarrosModule { }
