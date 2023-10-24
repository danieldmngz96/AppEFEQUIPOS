import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddMachineComponent } from '../table-add-machine/add-machine.component';
import { MovimientosService, Inventario, Productos } from 'src/app/services/movimientos.service';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalAddComponent implements OnInit {
  machineForm: FormGroup;
  disabled: boolean = true;
  newProducto: Productos = {
  tipo: "",
  descripcion: "",
  cantidad: "",
  valor_uni: "",
  peso_uni: "",
  area: "",
  peso_total: "",
  area_total: "",
  }
  constructor(public dialogRef: MatDialogRef<AddMachineComponent>,
    @Inject(MAT_DIALOG_DATA) public data: "",
    private movimiento: MovimientosService,
    private router: Router,
    private fb: FormBuilder,) {
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
  }

  addInventario() {
    //console.log(this.newInventario)
    this.movimiento.saveProducto(this.newProducto).subscribe(
      res => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Excelente...',
          text: `Se ha creado el producto ${this.machineForm.controls['descripcion'].value} exitosamente!`,
        });
        this.dialogRef.close();
      },
      err => {
        console.log(err);
      }
    );
  }
  cancelInventario(){
    this.router.navigate(['/inventario/agregar']);
  }


}
