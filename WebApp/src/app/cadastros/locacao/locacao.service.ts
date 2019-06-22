import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService extends BaseService {

  constructor(private http: HttpClient) {
    super();
   }

   save(locacao: any) : Observable<any> {
    //Primeiro Parâmetro === URL
    //Segundo Parâmetro === BODY - Corpo da Requisição
    return this.http.post(environment.urlWebAPI +"Locacao/", locacao)
      .catch((error: any) => Observable.throw(error.error));
   }

   update(locacao: any) : Observable<any> {
    return this.http.put(environment.urlWebAPI + "Locacao/" + locacao.locacaoid, locacao)
      .catch((error: any) => Observable.throw(error.error));
   }

   delete(id: number) : Observable<any> {
    return this.http.delete(environment.urlWebAPI + "Locacao/" + id)
      .catch((error: any) => Observable.throw(error.error));
   }

   listAll() : Observable<any> {
    return this.http.get(environment.urlWebAPI + "Locacao/")
      .catch((error: any) => Observable.throw(error.error));
   }

   list(id: any) : Observable<any> {
     return this.http.get(environment.urlWebAPI + "Locacao/" + id)
      .catch((error: any) => Observable.throw(error.error));
   }
}
