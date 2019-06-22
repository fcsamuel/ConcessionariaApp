import { Component, OnInit } from '@angular/core';
import { Cliente } from './model/cliente';
import { ClienteService } from './cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clienteList : Array<Cliente> = new Array<Cliente>();
  cliente: Cliente;
  edit: boolean;

  constructor(private clienteService: ClienteService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public spinner: NgxSpinnerService) { }


  ngOnInit() {
    this.cliente = new Cliente();
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
    console.log(this.cliente);
    this.spinner.show();
    if(!this.edit) {
      this.clienteService.save(this.cliente).subscribe( sucesso => {
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
    console.log(this.cliente);
    this.clienteService.update(this.cliente).subscribe( sucesso => {
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
    this.router.navigate(["../cliente-list"]);
  }

  getById(id: number) {
    this.clienteService.list(id).subscribe(sucesso => {
      if(sucesso != null) {
        console.log(sucesso);
        this.fill(sucesso);
      }
    },
    error => {
      console.log("ERRO");
    });
  }

  fill(cliente: any) {
    this.cliente = cliente;
  }

}
