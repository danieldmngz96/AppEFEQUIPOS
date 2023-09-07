import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const apiUrl = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class DespachosService {
  //api = "http://localhost:3000/almacen"
    api = apiUrl+"/almacen";
constructor(private http: HttpClient) { }
  /**
   * @author Daniel Dominguez
   * Metodo get obtener empleados
   * @param {body} body json
   * @returns json
   */
  getDespachos(page?:any, pageSize?:any) {
    // return this.http.get(this.api + "/v1/empleado");
    return this.http.get(this.api + '/despachos?page=' + page + '&limit=' + pageSize);
  }
    /**
  * @author Daniel Dominguez
  * Metodo post para añadir un despacho
  * @param {body} body json
  * @returns json
  */
    saveDespachos(despachos:Despachos){
      return this.http.post(this.api + '/add-despachos', despachos);
    }
}
export interface Despachos{
  "cod_obra":any;
  "cod_cont":any;
  "fec_des":any;
  "despachador":any;
  "obs":any;
  "conductor_veh":any;
  "tipo_veh":any;
  "autorizador":any;
  "peso_total":any;
  "area_total":any;
  "id_despacho":any;
  "placa_veh":any;
  "cantidad":any;
  "descripcion":any;
}
