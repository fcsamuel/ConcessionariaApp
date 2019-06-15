import { Component, OnInit } from '@angular/core';
import { Veiculo } from './model/veiculo';
import { VeiculoService } from './veiculo.service';
import { Marca } from '../marca/model/marca';
import { MarcaService } from '../marca/marca.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  marcaList : Array<Marca> = new Array<Marca>();
  veiculo: Veiculo;
  edit: boolean;

  constructor(private veiculoService: VeiculoService,
    private marcaService: MarcaService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.loadMarcaList();
    this.veiculo = new Veiculo();
    this.activatedRoute.params.subscribe(
      params => {
        if(params.id != undefined) {
          this.getById(params.id);
          this.edit = true;
        }
      }
    )
  }

  save() {
    console.log(this.veiculo);
    this.spinner.show();
    if(!this.edit) {
      this.veiculoService.save(this.veiculo).subscribe( sucesso => {
        if(sucesso != null) {
          this.spinner.hide();
          this.backward();
        }
      },
      error => {
        this.spinner.hide();
      });
    }else {
      this.update();
    }
  }
  
  update() {
    this.veiculoService.update(this.veiculo).subscribe( sucesso => {
      if(sucesso != null) {
        this.spinner.hide();
        this.backward();
      }
    },
    error => {
      this.spinner.hide();
    });
  }

  backward() {
    this.router.navigate(["../veiculo-list"]);
  }

  getById(id: number) {
    this.veiculoService.list(id).subscribe(sucesso => {
      if(sucesso != null) {
        this.fill(sucesso);
      }
    },
    error => {
      console.log("ERRO");
    });
  }

  fill(veiculo: any) {
    this.veiculo = veiculo;
  }

  loadMarcaList() {
    this.spinner.show();
    this.marcaService.listAll().subscribe(sucesso => {
      if(sucesso != null) {
        this.marcaList = sucesso;
        this.spinner.hide();
      }
    },
    error => {
      this.spinner.hide();
    });
  }

}
