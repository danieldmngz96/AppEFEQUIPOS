import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  api = apiUrl+"/bd_efequipos";
  constructor(private http: HttpClient) { }
  /**
  * @author Daniel Dominguez
  * Servicio paa login de papApp
  * @param {body} body json
  * @returns json
  */
  login(body: any): Observable<any> {
    // return this.http.post("https://web-services-papappcost-umb.onrender.com/login/auth", body);
    return this.http.post(this.api + "/login", body);
  }

  /**
* @author Daniel Dominguez
* Servicio para registro de usuarios
* @param {body} body json
* @returns json
*/
  register(user: User): Observable<any> {
    return this.http.post(this.api + "/register", user);
  }
  /**
   * @author Daniel Dominguez
   * Servicio paa login NO SIRVE FUE UN EXPERIMETO
   * @param {body} body json
   * @returns json
   */
  getInfoLogin(): Observable<any> {
    return this.http.get(this.api + "/info");
  }
  /**
   * @author Daniel Dominguez
   * Servicio para comparar el email
   * @param {body} body json
   * @returns json
   */
  getCompareEmail(email:any): Observable<any> {
    return this.http.get( this.api + `/validateEmail/${email}`);
  }
}

export interface User {
  name: any;
  password?: any;
  email?: any;
}
