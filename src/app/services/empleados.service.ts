import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  api = apiUrl+'/almacen';

  constructor(private http: HttpClient) { }
  /**
   * @author Daniel Dominguez
   * Metodo get obtener empleados
   * @param {body} body json
   * @returns json
   */
  getEmpleados() {
    // return this.http.get(this.api + "/v1/empleado");
    return this.http.get(this.api + '/empleados' );
  }
  /**
  * @author Daniel Dominguez
  * Metodo post para añadir un empleado
  * @param {body} body json
  * @returns json
  */
  saveMachine(team:Team){
    return this.http.post(this.api + '/add-empleado', team);
  }
    /**
  * @author Daniel Dominguez
  * Metodo delete para eliminar un empleado por id
  * @param {body} body json
  * @returns json
  */
    deleteEmpleado(id:string):Observable<any>{
      return this.http.delete(this.api + '/empleados' + id );
    }

    /**
  * @author Daniel Dominguez
  * Metodo put para modificar un empleado por id
  * @param {body} body json
  * @returns json
  */
    EditEmpleado(id:any, team:Team):Observable<any>{
      return this.http.put(this.api+'/:id_empleado' + id, team);
    }
}

export interface Team{
  nombre?:any;
  id_cargo?:any;
  celular?:any;
  e_mail?:any;
  usuario?:any;
}
