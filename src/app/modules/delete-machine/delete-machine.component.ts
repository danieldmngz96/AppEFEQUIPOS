import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovimientosService } from 'src/app/services/movimientos.service';

@Component({
  selector: 'app-delete-machine',
  templateUrl: './delete-machine.component.html',
  styleUrls: ['./delete-machine.component.scss']
})
export class DeleteMachineComponent implements OnInit {

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

  DeleteMachine(id:string){
    this.movimiento.deleteEquipo(id).subscribe(res=>{this.ngOnInit();},
    err=>{console.log(err);}
  );

  }
}
