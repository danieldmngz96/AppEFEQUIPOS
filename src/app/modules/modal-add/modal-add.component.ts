import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddMachineComponent } from '../add-machine/add-machine.component';
import { MovimientosService, Equipo } from 'src/app/services/movimientos.service';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalAddComponent implements OnInit {
  selectedFile: any = null;
  multiple: boolean = false;
  color: ThemePalette = 'primary';
  accept!: string;
  machineForm?: FormGroup;
  machineNew: Equipo = {
    id_equipo: '',
    nombre: '',
    logo: '',
    nombreCliente: '',
  }
  constructor(public dialogRef: MatDialogRef<AddMachineComponent>,
    @Inject(MAT_DIALOG_DATA) public data: "",
    private movimiento: MovimientosService,
    private router:Router,
    private fb: FormBuilder,) { }

  ngOnInit() {
    this.machineForm = this.fb.group({
      id_equipo: ['', Validators.required],
      logo: ['', Validators.required],
      nombreCliente: ['', Validators.required]
    });
  }

  addMachine(){
    this.movimiento.saveMachine(this.machineNew).subscribe(
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
