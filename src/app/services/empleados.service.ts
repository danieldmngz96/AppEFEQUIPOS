import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  api = "http://localhost:3000"

  constructor(private http: HttpClient) { }
  /**
   * @author Daniel Dominguez
   * Metodo get obtener empleados
   * @param {body} body json
   * @returns json
   */
  getEmpleados() {
    // return this.http.get(this.api + "/v1/empleado");
    return this.http.get(this.api + '/almacen/empleados');
  }

}

export interface Team{
  nombre?:any;
  id_cargo?:any;
  id_empleado?:any;
  celular?:any;
  e_mail?:any;
}
