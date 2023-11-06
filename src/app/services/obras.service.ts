import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ObrasService {
  api = apiUrl+'/almacen';
constructor(private http: HttpClient) { }
  /**
   * @author Daniel Dominguez
   * Metodo get obtener inventario
   * @param {body} body json
   * @returns json
   */
  getObras(page?: any, pageSize: number = 10) {
    return this.http.get(`${this.api}/getObras?page=${page}&limit=${pageSize} `);
  }
}
