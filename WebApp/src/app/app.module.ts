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
import { DialogComponent } from './shared/dialog/dialog.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { MatInputModule, MatRadioModule, MatButtonModule, MatTableModule, MatIconModule,
  MatPaginatorModule, MatSort, MatSortModule, MatExpansionModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component'; 

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
    VeiculoListComponent,
    DialogComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    BrowserAnimationsModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule, 
    MatTableModule, 
    MatIconModule, 
    HttpClientModule,
    MatPaginatorModule, 
    MatSortModule, 
    MatExpansionModule, 
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    NgxSpinnerModule
  ],
  providers: [HttpClient, DatePipe],
  entryComponents: [ DialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
