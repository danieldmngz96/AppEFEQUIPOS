import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddEmpleadoComponent } from '../add-empleado/add-empleado.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmpleadosService, Team } from 'src/app/services/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-add-empleado',
  templateUrl: './modal-add-empleado.component.html',
  styleUrls: ['./modal-add-empleado.component.scss']
})
export class ModalAddEmpleadoComponent implements OnInit {

  empleadoForm: FormGroup;

  empleadosNew: Team = {
    nombre:"",
    celular:"",
    cargo: "",
    idEmpleado: "",

    email: ""
  }
  constructor(public dialogRef: MatDialogRef<AddEmpleadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: "",
    private empleados: EmpleadosService,
    private router:Router,
    private fb: FormBuilder,) {  this.empleadoForm = this.fb.group({

      nombre: ['', Validators.required],
      id_cargo: ['', Validators.required],
      id_empleado: ['', Validators.required],
      celular: ['', Validators.required],
      e_mail: ['', Validators.email]
    });}

  ngOnInit() {

  }



  addEmpleado(){
    this.empleados.saveMachine(this.empleadosNew).subscribe(
      res=>{
        console.log(res);
        this.dialogRef.close();
        window.location.reload();
      },
      err=>{
        console.log(err);
      }
    );
  }



}
