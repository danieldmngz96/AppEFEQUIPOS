import { Component, OnInit } from '@angular/core';
import { MovimientosService } from 'src/app/services/movimientos.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.scss']
})
export class MovimientosComponent implements OnInit {
displayedColumns: string[] = ['Id', 'Tipo de inventario', 'Nombre del inventario', 'Fecha del registro', 'cantidad de material', 'Herramienta de suelo', ];
  dataSource =  [
    {position: 1, name: 'Inventario de tablas ', weight: "22/03/2023", symbol: 'H',w: 1.0079, s: 'H'}
  ];
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
