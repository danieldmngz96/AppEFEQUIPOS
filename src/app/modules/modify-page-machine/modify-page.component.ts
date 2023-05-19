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
  id: any;
  inventario: Inventario = {
    id_inventario: "",
    descripcion: "",
    cantidad: "",
    peso_kg: "",
    area_m2: "",
    peso_total: "",
    area_total: "",
  };

  constructor(
    private movimiento: MovimientosService,
    private router: Router,
    private fb: FormBuilder,
    private activateRouter: ActivatedRoute,
  ) {
    this.machineForm = this.fb.group({
      descripcion: ['', Validators.required],
      cantidad: ['', Validators.required],
      peso_kg: ['', Validators.required],
      area_m2: ['', Validators.required],
      peso_total: ({ value: '', disabled: this.disabled }),
      area_total: ({ value: '', disabled: this.disabled })
    });
  }

  ngOnInit() {
    this.machineForm.controls['peso_kg'].valueChanges.subscribe(
      res => {
        if (res) {
          let total = this.machineForm.controls['cantidad'].value * res;
          this.machineForm.controls['peso_total'].setValue(total);
        }
      },

    )
    this.machineForm.controls['area_m2'].valueChanges.subscribe(
      res => {
        if (res) {
          let total = this.machineForm.controls['cantidad'].value * res;
          this.machineForm.controls['area_total'].setValue(total);
        }
      },

    )
    this.id = this.activateRouter.snapshot.params['id'];
    console.log(this.id, this.machineForm);

    this.movimiento.getEquiposId(this.id).subscribe(
      (res: any) => {
        //this.machineNew = res;
        console.log(res);
        this.machineForm.controls['descripcion'].setValue(res[0].descripcion); // Actualizamos el valor del formulario con los datos del equipo
        this.machineForm.controls['cantidad'].setValue(res[0].cantidad); // Actualizamos el valor del formulario con los datos del equipo
        this.machineForm.controls['peso_kg'].setValue(res[0].peso_kg); // Actualizamos el valor del formulario con los datos del equipo
        this.machineForm.controls['area_m2'].setValue(res[0].area_m2); // Actualizamos el valor del formulario con los datos del equipo
      },
      err => {
        console.log(err);
      }
    );
  }


  //Aca traemos del servicio movimiento para modificar el modificar elemento
  modifyInventario() {
    const descripcionControl = this.machineForm.get('descripcion');
    const cantidadControl = this.machineForm.get('cantidad');
    const pesoKgControl = this.machineForm.get('peso_kg');
    const areaM2Control = this.machineForm.get('area_m2');
    const pesoTotalControl = this.machineForm.get('peso_total');
    const areaTotalControl = this.machineForm.get('area_total');

    if (
      descripcionControl &&
      cantidadControl &&
      pesoKgControl &&
      areaM2Control &&
      pesoTotalControl &&
      areaTotalControl
    ) {
      this.inventario.descripcion = descripcionControl.value;
      this.inventario.cantidad = cantidadControl.value;
      this.inventario.peso_kg = pesoKgControl.value;
      this.inventario.area_m2 = areaM2Control.value;
      this.inventario.peso_total = pesoTotalControl.value;
      this.inventario.area_total = areaTotalControl.value;

      this.movimiento.EditEquipo(this.id, this.inventario).subscribe(
        res => {
          Swal.fire({
            icon: 'success',
            title: 'Éxito!',

            text: `Se ha modificado con los siguentes valores ${this.machineForm.controls['descripcion'].value}  ` +
              `El valor cantidad es: ${this.machineForm.controls['cantidad'].value}` +
              `El valor peso kg es: ${this.machineForm.controls['peso_kg'].value}` +
              `El valor area^2 es: ${this.machineForm.controls['area_m2'].value} exitosamente!`,
            confirmButtonText: 'Aceptar',
          });
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
