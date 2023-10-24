import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    /**
* @author Daniel Dominguez
* Metodo post para añadir un contratos
* @param {body} body json
* @returns json
*/
saveContrato(contrato: Contrato) {
  return this.http.post(`${this.api}/addContratos`, contrato);

}
}
export interface Contrato {
  "nombre": any;
  "cod_cli": any;
  "fec_ini": any;
  "fec_fin": any;
  "estado": any;
}