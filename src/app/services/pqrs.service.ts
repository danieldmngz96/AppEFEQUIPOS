import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})

export class PqrsService {
  
  api = apiUrl+'/almacen';
constructor(private http: HttpClient) { }

  /**
  * @author Daniel Dominguez
  * Metodo post para añadir pqrs
  * @param {body} body json
  * @returns json
  */
  savePqrs(pqrs:Pqrs){
    return this.http.post(this.api  + '/Postpqrs' , pqrs);
  }

    /**
  * @author Daniel Dominguez
  * Metodo get para obtener pqrs
  * @param {body} body json
  * @returns json
  */
    getPqrs(page?:any, pageSize?:any){
      return this.http.get(this.api  + '/getPqrs' + page + '&limit=' + pageSize);
    }
}

export interface Pqrs{
  name?:any;
  direccion?:any;
  cantidad?:any;
  city?:any;
  phone?:any;
  country:any;
  email:any;
  pqrs:any;
}
