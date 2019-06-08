import { Component, OnInit } from '@angular/core';
import { Veiculo } from './model/veiculo';
import { VeiculoService } from './veiculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  veiculo: Veiculo;
  edit: boolean;

  constructor(private veiculoService: VeiculoService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public spinner: NgxSpinnerService) { }

  ngOnInit() {
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

}
