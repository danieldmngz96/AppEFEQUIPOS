import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) { }
  /**
  * @author Daniel Dominguez
  * Servicio paa login de papApp
  * @param {body} body json
  * @returns json
  */
  login(body: any): Observable<any> {
    // return this.http.post("https://web-services-papappcost-umb.onrender.com/login/auth", body);
    return this.http.post("http://localhost:3000/api/login", body);
  }

  /**
* @author Daniel Dominguez
* Servicio para registro de usuarios
* @param {body} body json
* @returns json
*/
  register(user: User): Observable<any> {
    return this.http.post("http://localhost:3000/api/register", user);
  }
  /**
   * @author Daniel Dominguez
   * Servicio paa login NO SIRVE FUE UN EXPERIMETO
   * @param {body} body json
   * @returns json
   */
  getInfoLogin(): Observable<any> {
    return this.http.get("http://localhost:3000/api/info");
  }
  /**
   * @author Daniel Dominguez
   * Servicio para comparar el email
   * @param {body} body json
   * @returns json
   */
  getCompareEmail(email:any): Observable<any> {
    return this.http.get(`http://localhost:3000/api/validateEmail/${email}`);
  }
}

export interface User {
  name: any;
  password?: any;
  email?: any;
}
