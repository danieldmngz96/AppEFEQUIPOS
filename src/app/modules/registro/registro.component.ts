import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { LoginService, User } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

interface departament {
  value: string;
}
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  municipios: any[] = []
  departamentos: any = []
  selectedMunicipio = null
  userNew: User = {
    name:"",
    password:"",
    email:""
  }

  myForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    email_user_confirm: ['', Validators.required],
    password: ['', Validators.required],
    password_user_confirm: ['', Validators.required],
    name: ['', Validators.required],
  });

  hide = true;

  constructor(public dialogRef: MatDialogRef<RegistroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private service: DepartamentosService,
    private registerService: LoginService,
  ) { }


  ngOnInit(): void {
    this.service.getDepartamentos().subscribe(data => {
      //this.departamentos = data
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  lookForDepartamentos(event: any) {
    console.log(event);
    /*    console.log(this.departamentos); */
    this.service.getMunicipiosporDepartamento(event.value).subscribe(data => {
      this.municipios = data;
      console.log(data);
    }
    )
  }
  register() {
    let body = {
      email: this.myForm.controls['email'].value,
      password: this.myForm.controls['password'].value,
      name: this.myForm.controls['name'].value,
    }
    this.registerService.register(this.userNew).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Excelente...',
        text: `Su usuario se a creado ${this.myForm.controls['name'].value} exitosamente!`,
      });
      this.dialogRef.close();
    });
  }
}
