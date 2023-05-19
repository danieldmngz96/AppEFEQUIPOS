import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  actividad1 = "https://web-services-papappcost-umb.onrender.com/crop_settings/crop_activity/id_main_process/1";

  actividad2 = "https://web-services-papappcost-umb.onrender.com/crop_settings/crop_activity/id_main_process/2";

  actividad3 = "https://web-services-papappcost-umb.onrender.com/crop_settings/crop_activity/id_main_process/3";

  actividad4 = "https://web-services-papappcost-umb.onrender.com/crop_settings/crop_activity/id_main_process/4";

  actividad5 = "https://web-services-papappcost-umb.onrender.com/crop_settings/crop_activity/id_main_process/5";
constructor(private http: HttpClient) { }

handleError(error: HttpErrorResponse): any {
  return throwError(error);
}

 /**
     * @author Daniel Dominguez
     * Servicio para consultarlas actividades del primer select
     * @param {json} filters json
     * @returns json
     */
 getActividades1() {
  return this.http.get<any[]>(`${this.actividad1}`).pipe(
    catchError(this.handleError),
    map((actividades:any) => actividades.map((m:any) => m.name_activity)),
    );
}

getActividades2() {
  return this.http.get<any[]>(`${this.actividad2}`).pipe(
    catchError(this.handleError),
    map((actividades:any) => actividades.map((m:any) => m.name_activity)),
    );
}

getActividades3() {
  return this.http.get<any[]>(`${this.actividad3}`).pipe(
    catchError(this.handleError),
    map((actividades:any) => actividades.map((m:any) => m.name_activity)),
    );
}

getActividades4() {
  return this.http.get<any[]>(`${this.actividad4}`).pipe(
    catchError(this.handleError),
    map((actividades:any) => actividades.map((m:any) => m.name_activity)),
    );
}

getActividades5() {
  return this.http.get<any[]>(`${this.actividad5}`).pipe(
    catchError(this.handleError),
    map((actividades:any) => actividades.map((m:any) => m.name_activity)),
    );
}
}
