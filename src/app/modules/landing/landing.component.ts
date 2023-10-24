import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  nombre: any;
  fecha = new Date();

  constructor(private login: LoginService,){}
  ngOnInit() {
    const data = localStorage.getItem('user');
    const nombre = JSON.parse(data || '');

    this.fecha = new Date();

    this.login.getInfoLogin(nombre.correo).subscribe((res: any) => {
      console.log(res);//undifined
      this.nombre = res[0];
    }, (error: any) => {
     console.log(error);
    });
  }

}
