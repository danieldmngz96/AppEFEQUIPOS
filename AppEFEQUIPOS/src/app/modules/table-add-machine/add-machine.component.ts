import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovimientosService } from 'src/app/services/movimientos.service';
import { ModalAddComponent } from '../modal-add-machine/modal-add.component';

@Component({
  selector: 'app-add-machine',
  templateUrl: './add-machine.component.html',
  styleUrls: ['./add-machine.component.scss']
})
export class AddMachineComponent implements OnInit {

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
  //Redirigir a modal de añadir maquinaria
  openModal(){
    const dialogRef = this.dialog.open(ModalAddComponent, {
      width: '550px',
    });
  }
}
