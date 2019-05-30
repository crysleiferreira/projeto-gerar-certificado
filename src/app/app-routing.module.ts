import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { EventosComponent } from './eventos/eventos.component';

const routes: Routes = [
  {path: 'cadastrar', component: CadastroEventoComponent },
  {path: 'pesquisar', component: PesquisaComponent },
  {path: 'eventos', component: EventosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
