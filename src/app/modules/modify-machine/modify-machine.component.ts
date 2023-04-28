import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovimientosService } from 'src/app/services/movimientos.service';
import { ModalModifyComponent } from '../modal-modify-machine/modal-modify.component';

@Component({
  selector: 'app-modify-machine',
  templateUrl: './modify-machine.component.html',
  styleUrls: ['./modify-machine.component.scss']
})
export class ModifyMachineComponent implements OnInit {

  lista:any;
  constructor(private movimiento: MovimientosService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.listarEquipo();
  }
  //Aca traemos del servicio movimiento los equipos
  listarEquipo(){
    this.movimiento.getEquipos().subscribe(
      res=>{
        this.lista = res
        console.log(res);
      },
      err=> console.log(err)
    );
  }
  openModalModifyMachine(){
    const dialogRef = this.dialog.open(ModalModifyComponent, {
      width: '350px',
    });
  }
}
