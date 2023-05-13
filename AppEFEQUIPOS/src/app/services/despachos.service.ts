import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DespachosService {
  api = "http://localhost:3000"
constructor(private http: HttpClient) { }
  /**
   * @author Daniel Dominguez
   * Metodo get obtener empleados
   * @param {body} body json
   * @returns json
   */
  getDespachos() {
    // return this.http.get(this.api + "/v1/empleado");
    return this.http.get(this.api + '/almacen/despachos' );
  }
    /**
  * @author Daniel Dominguez
  * Metodo post para añadir un despacho
  * @param {body} body json
  * @returns json
  */
    saveDespachos(despachos:Despachos){
      return this.http.post(this.api + '/almacen/add-despachos', despachos);
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
