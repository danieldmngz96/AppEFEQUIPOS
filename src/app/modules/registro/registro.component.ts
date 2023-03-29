import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { LoginService } from 'src/app/services/login.service';
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
  niveles: any[] = [
    { id: "No tiene", name: "No tiene" },
    { id: "Primaria", name: "Primaria" },
    { id: "Bachiller", name: "Bachiller" },
    { id: "Tecnico", name: "Tecnico" },
    { id: "Tecnologo", name: "Tecnologo" },
    { id: "Universitario", name: "Universitario" }
  ];

  myForm: FormGroup = this.formBuilder.group({
    email_user: ['', Validators.required],
    email_user_confirm: ['', Validators.required],
    password_user: ['', Validators.required],
    password_user_confirm: ['', Validators.required],
    name_user: ['', Validators.required],
    nickname_user: ['', Validators.required],
    country_user: ['Colombia'],
    province_user: ['', Validators.required],
    city_user: ['', Validators.required],
    birth_date_user: ['', Validators.required],
    level_studies_user: ['', Validators.required]
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
      this.departamentos = data
      console.log(this.departamentos);
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
    const birthDate = moment(this.myForm.controls['birth_date_user'].value).format('YYYY-MM-DD');
    let body = {
      email_user: this.myForm.controls['email_user'].value,
      password_user: this.myForm.controls['password_user'].value,
      name_user: this.myForm.controls['name_user'].value,
      nickname_user: this.myForm.controls['nickname_user'].value,
      country_user: 'Colombia',
      province_user: this.myForm.controls['province_user'].value,
      city_user: this.myForm.controls['city_user'].value,
      birth_date_user: birthDate,
      level_studies_user: this.myForm.controls['level_studies_user'].value,
      record_date_table: "",
      last_update_date: "",
    }
    this.registerService.register(body).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Excelente...',
        text: `Su usuario se a creado ${this.myForm.controls['name_user'].value} exitosamente!`,
      });
      this.dialogRef.close();
    });
  }
}
