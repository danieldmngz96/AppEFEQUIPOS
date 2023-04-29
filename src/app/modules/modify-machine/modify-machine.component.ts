import { Component, OnInit } from '@angular/core';
import { MovimientosService } from 'src/app/services/movimientos.service';


@Component({
  selector: 'app-modify-machine',
  templateUrl: './modify-machine.component.html',
  styleUrls: ['./modify-machine.component.scss']
})
export class ModifyMachineComponent implements OnInit {

  lista:any;
  constructor(private movimiento: MovimientosService,
   ) { }

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
