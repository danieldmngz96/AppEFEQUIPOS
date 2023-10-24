import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  api = apiUrl + "/almacen";

  constructor(private http: HttpClient) { }
  /**
   * @author Daniel Dominguez
   * Metodo get obtener clientes
   * @param {body} body json
   * @returns json
   */
  getClientes(page?: any, pageSize: number = 10) {
    // return this.http.get(this.api + "/v1/empleado");
    return this.http.get(`${this.api}/clientes?page=${page}&limit=${pageSize} `);
  }
  /**
* @author Daniel Dominguez
* Metodo post para añadir un cliente
* @param {body} body json
* @returns json
*/
  saveClient(client: Client) {
    return this.http.post(this.api + '/add-cliente', client);
  }

  /**
  * @author Daniel Dominguez
  * Metodo put para modificar un equipo por id
  * @param {body} body json
  * @returns json
  */
  EditCliente(id:any, client: Client):Observable<any>{
    return this.http.put(this.api + '/modificar/:id' + id, client);
  }
 /**
  * @author Daniel Dominguez
  * Metodo get obtener un cliente por id
  * @param {body} body json
  * @returns json
  */
 getClienteId(id: any): Observable<any> {
  return this.http.get(this.api + '/clientes' + id);
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
