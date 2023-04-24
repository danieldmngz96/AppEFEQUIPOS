import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  api="http://localhost:3000/api"

constructor(private http: HttpClient) { }
 /**
  * @author Daniel Dominguez
  * Metodo get obtener equipo
  * @param {body} body json
  * @returns json
  */
  getEquipos(){
    return this.http.get(this.api);
  }

   /**
  * @author Daniel Dominguez
  * Metodo get obtener un equipo por id
  * @param {body} body json
  * @returns json
  */
   getEquiposId(id:string){
    return this.http.get(this.api + '/' + id);
  }

  /**
  * @author Daniel Dominguez
  * Metodo post para añadir un equipo
  * @param {body} body json
  * @returns json
  */
  saveMachine(equipo:Equipo){
    return this.http.post(this.api , equipo);
  }

   /**
  * @author Daniel Dominguez
  * Metodo delete para eliminar un equipo por id
  * @param {body} body json
  * @returns json
  */
   deleteEquipo(id:string){
    return this.http.delete(this.api + '/' + id );
  }

    /**
  * @author Daniel Dominguez
  * Metodo put para modificar un equipo por id
  * @param {body} body json
  * @returns json
  */
    EditEquipo(id:string, equipo:Equipo){
      return this.http.put(this.api+'/' + id, equipo);
    }

}

export interface Equipo{
  id_equipo?:string;
  nombre?:string;
  logo?:boolean;
  nombreCliente?:string;
}
