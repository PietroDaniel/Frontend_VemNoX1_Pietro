import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosModule } from './carros/carros.module';

export const routes: Routes = [
  { path: '', redirectTo: 'cartas', pathMatch: 'full' },
  {
    path: 'cartas',
    loadChildren: () =>
      import('./cartas/cartas.module').then(m => m.CartasModule)
  },
  {
    path: 'jogador',
    loadChildren: () => import('./jogador/jogador.module').then(m => m.JogadorModule)
  },
  {
    path: 'carros',
    loadChildren: () => import('./carros/carros.module').then(m => m.CarrosModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
