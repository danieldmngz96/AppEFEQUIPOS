import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  name: any;
  fecha = new Date();

  constructor(private login: LoginService,){}
  ngOnInit() {
    const data = localStorage.getItem('user');
    this.name = JSON.parse(data || '');
    this.fecha = new Date();
  }

}
