import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DialogComponent } from '../../../shared/dialog/dialog.component';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  displayedColumns: string[] = [/*"clienteid",*/ "nome", "cpf", "contato", "endereco", "editColumn"];
  public dataSource: any;

  @ViewChild(MatPaginator) paginatorCustom: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private clienteService: ClienteService,
    public router: Router, 
    private dialog: MatDialog,
    public spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.listAll();
  }

  callUpdate(id: number) {
    this.router.navigate(["../cliente-edit/"+id]);
  }

  callNew() {
    this.router.navigate(["../cliente"]);
  }

  delete(id: number) {
    this.clienteService.delete(id).subscribe(sucesso => {
      if(sucesso != null) {
        this.listAll();
      }
    },
    error => {
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

  listAll() {
    this.spinner.show();
    this.clienteService.listAll().subscribe(sucesso => {
      if(sucesso != null) {
        this.updateTable(sucesso);
        this.spinner.hide();
      }
    },
    error => {
      this.spinner.hide();
    });
  }

  list(id: number) {
    this.spinner.show();
    this.clienteService.list(id).subscribe(sucesso => {
      if(sucesso != null) {
        this.updateTable(sucesso);
        this.spinner.hide();
      }
    },
    error => {
      this.spinner.hide();
    });
  }

  updateTable(cliente: any) {
    this.dataSource = new MatTableDataSource<Cliente>(cliente);
    this.dataSource.paginator = this.paginatorCustom;
    this.dataSource.sort = this.sort;
  }

}
