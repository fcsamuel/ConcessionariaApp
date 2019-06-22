import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { LocacaoService } from '../locacao.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Locacao } from '../model/locacao';
import { DialogComponent } from '../../../shared/dialog/dialog.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-locacao-list',
  templateUrl: './locacao-list.component.html',
  styleUrls: ['./locacao-list.component.css']
})
export class LocacaoListComponent implements OnInit {

  displayedColumns: string[] = ["cliente", "veiculo", "valorlocacao", "dtLocacao", "dtDevolucao", "observacao", "editColumn"];

  public dataSource: any;

  @ViewChild(MatPaginator) paginatorCustom: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private locacaoService: LocacaoService,
    public router: Router,
    private dialog: MatDialog,
    private datePipe: DatePipe,
    public spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.listAll();
  }

  listAll() {
    this.spinner.show();
    this.locacaoService.listAll().subscribe(sucesso => {
      if (sucesso != null) {
        console.log(sucesso);
        this.updateTable(sucesso);
        this.spinner.hide();
      }
    }, error => {
      console.log("OCORREU UM ERRO!");
      this.spinner.hide();
    })
  }

  list(id: number) {
    this.spinner.show();
    this.locacaoService.list(id).subscribe(sucesso => {
      if (sucesso != null) {
        this.updateTable(sucesso);
        this.spinner.hide();
      }
    }, error => {
      this.spinner.hide();
    })
  }

  callUpdate(id: number) {
    this.router.navigate(["../locacao-edit/" + id]);
  }

  callNew() {
    this.router.navigate(["../locacao"]);
  }

  delete(id: number) {
    this.locacaoService.delete(id).subscribe(sucesso => {
      if (sucesso != null) {
        this.listAll();
      }
    }, error => {
      this.spinner.hide();
    });
  }

  deleteConfirmation(id: any) {
    let dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custom-dialog',
      data: 'Confirma a exclusão do registro?',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(isConfirm => {
      if(isConfirm) {
        this.delete(id);
      }
    });
  }

  updateTable(locacao: any) {
    console.log(locacao);
    this.dataSource = new MatTableDataSource<Locacao>(locacao);
    this.dataSource.paginator = this.paginatorCustom;
    this.dataSource.sort = this.sort;
  }

}
