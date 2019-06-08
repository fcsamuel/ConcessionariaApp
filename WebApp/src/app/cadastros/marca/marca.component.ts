import { Component, OnInit } from '@angular/core';
import { Marca } from './model/marca';
import { MarcaService } from './marca.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {

  marca: Marca;
  edit: boolean;

  constructor(private marcaService: MarcaService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.marca = new Marca();
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
      this.marcaService.save(this.marca).subscribe( sucesso => {
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
    this.marcaService.update(this.marca).subscribe( sucesso => {
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
    this.router.navigate(["../marca-list"]);
  }

  getById(id: number) {
    this.marcaService.list(id).subscribe(sucesso => {
      if(sucesso != null) {
        this.fill(sucesso);
      }
    },
    error => {
      console.log("ERRO");
    });
  }

  fill(marca: any) {
    this.marca = marca;
  }

}
