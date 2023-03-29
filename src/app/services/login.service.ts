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
    return this.http.post("https://web-services-papappcost-umb.onrender.com/login/auth", body);
  }

    /**
  * @author Daniel Dominguez
  * Servicio para registro de usuarios
  * @param {body} body json
  * @returns json
  */
  register(body: any): Observable<any> {
    return this.http.post("https://web-services-papappcost-umb.onrender.com/login/signup/", body);
  }

}
