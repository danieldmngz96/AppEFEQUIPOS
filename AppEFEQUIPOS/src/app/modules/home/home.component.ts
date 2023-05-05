import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fecha = new Date();
  loginForm!: FormGroup;
  hide = true;
  constructor(
    private service: LoginService,
    private router: Router,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required],
      ),
    });
    this.fecha = new Date();
  }

  login() {
    let body = {
      email: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value,
    };
    console.log(body);

    this.service.login(body).subscribe((resp: any) => {
      console.log(typeof(resp), resp);
      if(typeof(resp.user) === 'string'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Correo o contraseña invalida!',
        });
        localStorage.clear();
      } else if(typeof(resp.user) === 'object'){
        console.log('login...');
        localStorage.setItem("user", JSON.stringify(resp.user));
        this.router.navigate(['/bienvenido'])
      }
    }, (error: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Correo o contraseña invalida!',
      });
    });
  }

  onRegister() {
    this.router.navigate(['/Register']);
    const dialogRef = this.dialog.open(RegistroComponent, {
      width: '40%',
    });
  }

}
