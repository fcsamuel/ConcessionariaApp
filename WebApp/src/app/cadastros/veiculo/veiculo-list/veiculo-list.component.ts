import { Component, OnInit, ViewChild } from '@angular/core';
import { Veiculo } from '../model/veiculo';
import { VeiculoService} from '../veiculo.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../../shared/dialog/dialog.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css']
})
export class VeiculoListComponent implements OnInit {

  displayedColumns: string[] = ["descricao", "marca", "modelo", "placa", "ano", "preco", "valorLocacao", "cor", "editColumn"];
  public dataSource: any;

  @ViewChild(MatPaginator) paginatorCustom: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private veiculoService: VeiculoService,
    public router: Router, 
    private dialog: MatDialog,
    public spinner: NgxSpinnerService) { }

    ngOnInit() {
      this.listAll();
    }
  
    callUpdate(id: number) {
      this.router.navigate(["../veiculo-edit"+id]);
    }
  
    callNew() {
      this.router.navigate(["../veiculo"]);
    }
  
    delete(id: number) {
      this.veiculoService.delete(id).subscribe(sucesso => {
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
      this.veiculoService.listAll().subscribe(sucesso => {
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
      this.veiculoService.list(id).subscribe(sucesso => {
        if(sucesso != null) {
          this.updateTable(sucesso);
          this.spinner.hide();
        }
      },
      error => {
        this.spinner.hide();
      });
    }
  
    updateTable(veiculo: any) {
      this.dataSource = new MatTableDataSource<Veiculo>(veiculo);
      this.dataSource.paginator = this.paginatorCustom;
      this.dataSource.sort = this.sort;
    }

}
