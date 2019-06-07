import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VeiculoComponent } from './cadastros/veiculo/veiculo.component';
import { MarcaComponent } from './cadastros/marca/marca.component';
import { ClienteComponent } from './cadastros/cliente/cliente.component';
import { LocacaoComponent } from './cadastros/locacao/locacao.component';
import { ClienteListComponent } from './cadastros/cliente/cliente-list/cliente-list.component';
import { LocacaoListComponent } from './cadastros/locacao/locacao-list/locacao-list.component';
import { MarcaListComponent } from './cadastros/marca/marca-list/marca-list.component';
import { VeiculoListComponent } from './cadastros/veiculo/veiculo-list/veiculo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VeiculoComponent,
    MarcaComponent,
    ClienteComponent,
    LocacaoComponent,
    ClienteListComponent,
    LocacaoListComponent,
    MarcaListComponent,
    VeiculoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
