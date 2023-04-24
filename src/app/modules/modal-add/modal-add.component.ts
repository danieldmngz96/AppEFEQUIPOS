import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddMachineComponent } from '../add-machine/add-machine.component';
import { MovimientosService, Equipo } from 'src/app/services/movimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalAddComponent implements OnInit {

  machineNew: Equipo = {
    id_equipo: '',
    nombre: '',
    logo: true,
    nombreCliente: '',
  }
  constructor(public dialogRef: MatDialogRef<AddMachineComponent>,
    @Inject(MAT_DIALOG_DATA) public data: "",
    private movimiento: MovimientosService,
    private router:Router,) { }

  ngOnInit() {
  }

  addMachine(){
    this.movimiento.saveMachine(this.machineNew).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    );
  }

}
