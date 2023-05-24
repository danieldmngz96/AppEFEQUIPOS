import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  api = "http://localhost:3000"
  constructor(private http: HttpClient) { }
  /**
   * @author Daniel Dominguez
   * Metodo get obtener clientes
   * @param {body} body json
   * @returns json
   */
  getClientes() {
    // return this.http.get(this.api + "/v1/empleado");
    return this.http.get(this.api + '/almacen/clientes');
  }
  /**
* @author Daniel Dominguez
* Metodo post para añadir un cliente
* @param {body} body json
* @returns json
*/
  saveClient(client: Client) {
    return this.http.post(this.api + '/almacen/add-cliente', client);
  }
}

export interface Client {
  "nom_cliente": any;
  "direccion": any;
  "nombre_obra": any;
  "cargo_obra": any;
  "NIT": any;
  "celular": any;
  "ciudad": any;
  "departamento": any;
}
