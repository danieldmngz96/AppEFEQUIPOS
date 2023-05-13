import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventario, MovimientosService } from 'src/app/services/movimientos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modify-page',
  templateUrl: './modify-page.component.html',
  styleUrls: ['./modify-page.component.scss']
})
export class ModifyPageComponent implements OnInit {
  machineForm: FormGroup;

  id:any;
  constructor(
    private movimiento: MovimientosService,
    private router:Router,
    private fb: FormBuilder,
    private activateRouter: ActivatedRoute,
  ) { this.machineForm = this.fb.group({
    nombre: new FormControl('', [Validators.required]),
    logo: new FormControl('', [Validators.required]),
    nombreCliente: new FormControl('', [Validators.required]),
  });}

  ngOnInit() {
    this.id = this.activateRouter.snapshot.params['id'];
    console.log(this.id , this.machineForm);
    this.movimiento.getEquiposId(this.id).subscribe(
      (res:any) => {
        //this.machineNew = res;
        console.log(res);
        this.machineForm.controls['nombre'].setValue(res[0].nombre); // Actualizamos el valor del formulario con los datos del equipo
        this.machineForm.controls['logo'].setValue(res[0].logo); // Actualizamos el valor del formulario con los datos del equipo
        this.machineForm.controls['nombreCliente'].setValue(res[0].nombreCliente); // Actualizamos el valor del formulario con los datos del equipo
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }


   //Aca traemos del servicio movimiento para modificar el modificar elemento
  modifyEquipo(){
    const body = {
      nombre: this.machineForm.controls['nombre'].value,
      logo: this.machineForm.controls['logo'].value,
      nombreCliente: this.machineForm.controls['nombreCliente'].value,
    }
 /*  this.movimiento.EditEquipo(this.id, body).subscribe(
    res=>{
      Swal.fire({
      icon: 'success',
      title: 'Éxito!',
      text: 'El inventario se ha modificado correctamente.',
      confirmButtonText: 'Aceptar',
    });
    console.log(res);
    },
    err=>{
      console.log(err);
    }
    ); */
  }
}
