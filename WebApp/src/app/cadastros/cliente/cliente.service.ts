import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BaseService } from '../../shared/base.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  save(cliente: any) : Observable<any>{
    //Primeiro Parâmetro === URL
    //Segundo Parâmetro === BODY - Corpo da Requisição
    return this.http.post(environment.urlWebAPI +"Cliente/", cliente)
      .catch((error: any) => Observable.throw(error.error));
  }

  update(cliente: any) : Observable<any>{
    //Primeiro Parâmetro === URL
    //Segundo Parâmetro === BODY - Corpo da Requisição
    return this.http.put(environment.urlWebAPI +"Cliente/"+cliente.clienteId, cliente)
      .catch((error: any) => Observable.throw(error.error));
  }

  delete(id : number) : Observable<any> {
    return this.http.delete(environment.urlWebAPI +"Cliente/"+ id)
      .catch((error: any) => Observable.throw(error.error));
  }

  listAll() : Observable<any> {
    return this.http.get(environment.urlWebAPI +"Cliente/")
      .catch((error: any) => Observable.throw(error.error));
  }

  list(id: number) : Observable<any> {
    return this.http.get(environment.urlWebAPI +"Cliente/"+ id)
      .catch((error: any) => Observable.throw(error.error));
  }
}
