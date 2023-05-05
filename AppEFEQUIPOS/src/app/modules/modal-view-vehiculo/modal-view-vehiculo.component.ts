import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TableDespachosComponent } from '../table-despachos/table-despachos.component';
import { DespachosService } from 'src/app/services/despachos.service';

@Component({
  selector: 'app-modal-view-vehiculo',
  templateUrl: './modal-view-vehiculo.component.html',
  styleUrls: ['./modal-view-vehiculo.component.scss']
})
export class ModalViewVehiculoComponent implements OnInit {
  lista:any;
  constructor(private despachos: DespachosService,
    public dialogRef: MatDialogRef<TableDespachosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: "",) { }

  ngOnInit() {
    this.listarInfoVehiculo();
  }
//Aca traemos del servicio listar despachos
listarInfoVehiculo(){
  this.despachos.getDespachos().subscribe(
    res=>{
      this.lista = res
      console.log(res);
    },
    err=> console.log(err)
  );
}
}
