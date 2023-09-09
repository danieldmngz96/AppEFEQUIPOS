import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  api = apiUrl+"/bd_efequipos";

constructor(private http: HttpClient) { }
 /**
  * @author Daniel Dominguez
  * Metodo get obtener inveentario
  * @param {body} body json
  * @returns json
  */
  getEquipos(page?:any, pageSize?:any) {
    return this.http.get(this.api + '/inventario?page=' + page + '&limit=' + pageSize);
  }

   /**
  * @author Daniel Dominguez
  * Metodo get obtener un equipo por id
  * @param {body} body json
  * @returns json
  */
   getEquiposId(id:string):Observable<any>{
    return this.http.get(this.api + '/' + id);
  }

  /**
  * @author Daniel Dominguez
  * Metodo post para añadir inventario
  * @param {body} body json
  * @returns json
  */
  saveMachine(inventario:Inventario){
    return this.http.post(this.api  + '/add-inventario' , inventario);
  }

   /**
  * @author Daniel Dominguez
  * Metodo delete para eliminar un equipo por id
  * @param {body} body json
  * @returns json
  */
   deleteEquipo(id_inventario:string):Observable<any>{
    return this.http.delete(this.api + '/' + id_inventario );
  }

    /**
  * @author Daniel Dominguez
  * Metodo put para modificar un equipo por id
  * @param {body} body json
  * @returns json
  */
    EditEquipo(id:any, inventario:Inventario):Observable<any>{
      return this.http.put(this.api+'/' + id, inventario);
    }

}

export interface Inventario{
  id_inventario?:any;
  descripcion?:any;
  cantidad?:any;
  peso_kg?:any;
  area_m2:any;
  peso_total:any;
  area_total:any;
}
