import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventario, MovimientosService, Productos } from 'src/app/services/movimientos.service';
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
  producto: Productos = {
    //cod_prod: "",
    tipo: "",
    descripcion: "",
    cantidad: "",
    valor_uni: "",
    peso_uni: "",
    area: "",
    peso_total: "",
    area_total: ""
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
    tipo: ['', Validators.required],
    valor_uni: ['', Validators.required],
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
      this.machineForm.controls['peso_kg'].setValue(res[0].peso_uni); // Actualizamos el valor del formulario con los datos del equipo
      this.machineForm.controls['area_m2'].setValue(res[0].area); // Actualizamos el valor del formulario con los datos del equipo
      this.machineForm.controls['tipo'].setValue(res[0].tipo); // Actualizamos el valor del 
      this.machineForm.controls['valor_uni'].setValue(res[0].valor_uni); // Actualizamos el valor del 
      this.machineForm.controls['peso_total'].setValue(res[0].peso_total); // Actualizamos el valor del formulario con los datos del equipo
      this.machineForm.controls['area_total'].setValue(res[0].area_total); // Actualizamos el valor del formulario con los datos del equipo
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
  const tipoControl = this.machineForm.get('tipo');
  const valorControl = this.machineForm.get('valor_uni');

  if (
    descripcionControl &&
    cantidadControl &&
    pesoKgControl &&
    areaM2Control &&
    pesoTotalControl &&
    areaTotalControl &&
    tipoControl &&
    valorControl
  ) {
    this.producto.descripcion = descripcionControl.value;
    this.producto.cantidad = cantidadControl.value;
    this.producto.peso_uni = pesoKgControl.value;
    this.producto.area = areaM2Control.value;
    this.producto.peso_total = pesoTotalControl.value;
    this.producto.area_total = areaTotalControl.value;
    
    this.producto.tipo = tipoControl.value;
    this.producto.valor_uni = valorControl.value;


    this.movimiento.EditProducto(this.id, this.producto).subscribe(
      (res:any) => {
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
        this.router.navigate(['/inventario/modificar']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
}
