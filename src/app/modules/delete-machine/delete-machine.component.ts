import { Component, OnInit } from '@angular/core';
import { MovimientosService } from 'src/app/services/movimientos.service';

@Component({
  selector: 'app-delete-machine',
  templateUrl: './delete-machine.component.html',
  styleUrls: ['./delete-machine.component.css']
})
export class DeleteMachineComponent implements OnInit {

  lista:any;
  constructor(private movimiento: MovimientosService,) { }

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
}
