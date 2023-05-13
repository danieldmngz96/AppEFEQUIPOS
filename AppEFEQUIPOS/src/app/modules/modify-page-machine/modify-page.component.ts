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
  disabled: boolean = true;
  id:any;
  constructor(
    private movimiento: MovimientosService,
    private router:Router,
    private fb: FormBuilder,
    private activateRouter: ActivatedRoute,
  ) { this.machineForm = this.fb.group({
    descripcion: ['', Validators.required],
    cantidad: ['', Validators.required],
    peso_kg: ['', Validators.required],
    area_m2: ['', Validators.required],
    peso_total: ({value: '', disabled: this.disabled}),
    area_total: ({value: '', disabled: this.disabled})
  });}

  ngOnInit() {
    this.id = this.activateRouter.snapshot.params['id'];
    console.log(this.id , this.machineForm);
    this.movimiento.getEquiposId(this.id).subscribe(
      (res:any) => {
        //this.machineNew = res;
        console.log(res);
        this.machineForm.controls['descripcion'].setValue(res[0].descripcion); // Actualizamos el valor del formulario con los datos del equipo
        this.machineForm.controls['cantidad'].setValue(res[0].cantidad); // Actualizamos el valor del formulario con los datos del equipo
        this.machineForm.controls['peso_kg'].setValue(res[0].peso_kg); // Actualizamos el valor del formulario con los datos del equipo
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
/*    this.movimiento.EditEquipo(this.id, body).subscribe(
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
    );
  } */
}
}
