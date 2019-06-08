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

  constructor() { }

  ngOnInit() {
  }

}
