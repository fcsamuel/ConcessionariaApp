import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente/model/cliente';
import { Veiculo } from '../veiculo/model/veiculo';
import { LocacaoService } from './locacao.service';
import { ClienteService } from '../cliente/cliente.service';
import { VeiculoService } from '../veiculo/veiculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Locacao } from './model/locacao';

@Component({
  selector: 'app-locacao',
  templateUrl: './locacao.component.html',
  styleUrls: ['./locacao.component.css']
})
export class LocacaoComponent implements OnInit {

  clienteList: Array<Cliente> = new Array<Cliente>();
  veiculoList: Array<Veiculo> = new Array<Veiculo>();
  locacao: Locacao;
  edit: boolean;

  constructor(private locacaoService: LocacaoService,
    private clienteService: ClienteService,
    private veiculoService: VeiculoService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.loadClienteList();
    this.loadVeiculoList();;
    this.locacao = new Locacao();
    this.activatedRoute.params.subscribe(
      params => {
        if (params.id != undefined) {
          this.getById(params.id);
          this.edit = true;
        }
      }
    )
  }

  save() {
    this.spinner.show();
    if(!this.edit) {
      this.locacaoService.save(this.locacao).subscribe(sucesso => {
        if (sucesso != null) {
          console.log("Locação salva!");
          console.log(this.locacao);
          this.spinner.hide();
          this.backward();
        }
      },
      error => {
        this.spinner.hide();
      });
    } else {
      this.update();
    }
  }

  update() {
    this.locacaoService.update(this.locacao).subscribe(sucesso => {
      if (sucesso != null) {
        this.spinner.hide();
        this.backward();
      }
    },
    error => {
      this.spinner.hide();
    })
  }

  getById(id: number) {
    this.locacaoService.list(id).subscribe(sucesso => {
      if (sucesso != null) {
        this.fill(sucesso);

      }
    },
    error => {
      console.log("ERRO");
    })
  }

  fill(locacao : any) {
    this.locacao = locacao;
  }
    
  backward() {
    this.router.navigate(["../locacao-list"]);
  }

  loadClienteList() {
    this.spinner.show();
    this.clienteService.listAll().subscribe(sucesso => {
      if (sucesso != null) {
        this.clienteList = sucesso;
        this.spinner.hide();
        console.log("passou por aqui");
        console.log(this.clienteList.length);
      }
    },
    error => {
      this.spinner.hide();
    })
  }

  loadVeiculoList() {
    this.spinner.show();
    this.veiculoService.listAll().subscribe(sucesso => {
      if (sucesso != null) {
        this.veiculoList = sucesso;
        this.spinner.hide();
      }
    },
    error => {
      this.spinner.hide();
    })
  }

}
