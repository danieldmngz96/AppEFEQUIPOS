import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ContratosService {

  api = apiUrl+'/almacen';

constructor(private http: HttpClient) { }
  /**
   * @author Daniel Dominguez
   * Metodo get obtener contratos
   * @param {body} body json
   * @returns json
   */
  getContratos(page?:any, pageSize:any = 10) {
    // return this.http.get(this.api + "/v1/empleado");
    return this.http.get(this.api + '/getContratos?page='+ page + '&limit=' + pageSize );
  }
}
