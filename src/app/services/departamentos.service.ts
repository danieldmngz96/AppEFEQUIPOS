import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  municipios = "https://www.datos.gov.co/resource/xdk5-pm3f.json"
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse): any {
    return throwError(error);
  }
  /**
     * @author Daniel Dominguez
     * Servicio para consultarlos departamentos de colombia
     * @param {json} filters json
     * @returns json
     */

  getDepartamentos() {
    return this.http.get<any[]>(`${this.municipios}`).pipe(
      catchError(this.handleError),
      map((municipios:any) => municipios.map((m:any) => m.departamento)),
      map(departamentos => [...new Set(departamentos)]),
    );
  }

  /**
     * @author Daniel Dominguez
     * Servicio para consultarlos municipios de colombia
     * @param {json} filters json
     * @returns json
     */
  getMunicipiosporDepartamento(departamento: string){
    return this.http.get<any[]>(`${this.municipios}`).pipe(
      catchError(this.handleError),
      map((municipios:any) => municipios.filter((m:any) => m.departamento === departamento))
    );
  }
}
