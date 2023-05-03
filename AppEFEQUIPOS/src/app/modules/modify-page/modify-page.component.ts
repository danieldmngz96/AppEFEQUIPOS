import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo, MovimientosService } from 'src/app/services/movimientos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modify-page',
  templateUrl: './modify-page.component.html',
  styleUrls: ['./modify-page.component.scss']
})
export class ModifyPageComponent implements OnInit {
  machineForm: FormGroup;
  machineNew: Equipo = {

    nombre: '',
    logo: '',
    nombreCliente: '',
  }
  id:any;
  constructor(
    private movimiento: MovimientosService,
    private router:Router,
    private fb: FormBuilder,
    private activateRouter: ActivatedRoute,
  ) { this.machineForm = this.fb.group({

    nombre: ['', Validators.required],
    logo: ['', Validators.required],
    nombreCliente: ['', Validators.required]
  });}

  ngOnInit() {
    this.modifyEquipo();
    this.id = this.activateRouter.snapshot.params['id'];
    console.log(this.id);
    this.movimiento.getEquiposId(this.id).subscribe(
      res => {
        this.machineNew = res;
        this.machineForm.patchValue(this.machineNew); // Actualizamos el valor del formulario con los datos del equipo
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }


   //Aca traemos del servicio movimiento para modificar el modificar elemento
  modifyEquipo(){
  this.movimiento.EditEquipo(this.id, this.machineNew).subscribe(
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
  }
}
