import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  api = apiUrl + "/almacen";

  constructor(private http: HttpClient) { }
  /**
   * @author Daniel Dominguez
   * Metodo get obtener inventario
   * @param {body} body json
   * @returns json
   */
  getEquipos(page?: any, pageSize: number = 10) {
    return this.http.get(`${this.api}/getProductos?page=${page}&limit=${pageSize} `);
  }

  /**
 * @author Daniel Dominguez
 * Metodo get obtener un equipo por id
 * @param {body} body json
 * @returns json
 */
  getEquiposId(id: string): Observable<any> {
    return this.http.get(`${this.api}/getProductosById/${id} `);
  }

  /**
  * @author Daniel Dominguez
  * Metodo post para añadir producto
  * @param {body} body json
  * @returns json
  */
  saveProducto(productos: Productos) {
    return this.http.post(`${this.api}/addProducto `,productos);
  }

  /**
 * @author Daniel Dominguez
 * Metodo delete para eliminar un equipo por id
 * @param {body} body json
 * @returns json
 */
  deleteEquipo(id_inventario: string): Observable<any> {
    return this.http.delete(this.api + '/' + id_inventario);
  }

  /**
* @author Daniel Dominguez
* Metodo put para modificar un producto por id
* @param {body} body json
* @returns json
*/
  EditProducto(id: any, productos: Productos): Observable<any> {
    return this.http.put(`${this.api}/updateProductos/${id} `, productos);
  }

  /**
* @author Daniel Dominguez
* Metodo put para modificar un equipo por id
* @param {body} body json
* @returns json
*/
  EditProduct(id: any, producto: Productos): Observable<any> {
    return this.http.put(this.api + '/' + id, producto);
  }
 /**
  * @author Daniel Dominguez
  * Metodo get obtener un producto por id
  * @param {body} body json
  * @returns json
  */
 getProductosById(id: any): Observable<any> {
  return this.http.get(this.api + '/getProductosById/' + id);
}
}

export interface Inventario {
  id_inventario?: any;
  descripcion?: any;
  cantidad?: any;
  peso_kg?: any;
  area_m2: any;
  peso_total: any;
  area_total: any;
}

export interface Productos {
  cod_prod?: any;
  tipo?: any;
  descripcion?: any;
  cantidad?: any;
  valor_uni: any;
  peso_uni: any;
  area: any;
  peso_total: any;
  area_total: any;
}