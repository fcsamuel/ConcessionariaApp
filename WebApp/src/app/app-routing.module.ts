import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarcaComponent } from './cadastros/marca/marca.component';
import { MarcaListComponent } from './cadastros/marca/marca-list/marca-list.component';
import { VeiculoComponent } from './cadastros/veiculo/veiculo.component';
import { VeiculoListComponent } from './cadastros/veiculo/veiculo-list/veiculo-list.component';
import { ClienteComponent } from './cadastros/cliente/cliente.component';
import { ClienteListComponent } from './cadastros/cliente/cliente-list/cliente-list.component';
import { LocacaoComponent } from './cadastros/locacao/locacao.component';
import { LocacaoListComponent } from './cadastros/locacao/locacao-list/locacao-list.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: 'marca', component: MarcaComponent},
  {path: 'marca-list', component: MarcaListComponent},
  {path: 'marca-edit/:id', component: MarcaComponent},
  {path: 'veiculo', component: VeiculoComponent},
  {path: 'veiculo-list', component: VeiculoListComponent},
  {path: 'veiculo-edit/:id', component: VeiculoComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'cliente-list', component: ClienteListComponent},
  {path: 'cliente-edit/:id', component: ClienteComponent},
  {path: 'locacao', component: LocacaoComponent},
  {path: 'locacao-list', component: LocacaoListComponent},
  {path: 'locacao-edit/:id', component: LocacaoComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
