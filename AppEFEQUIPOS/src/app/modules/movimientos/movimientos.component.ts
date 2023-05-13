import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MovimientosService } from 'src/app/services/movimientos.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.scss']
})
export class MovimientosComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  length: any;
  pageSize: any;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex: number = 0;
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
  ngAfterViewInit() {
    this.paginator?.page.subscribe(
      (event) => {
        this.pageIndex = event.pageIndex;
      }
    )
  }

  getPaginatedData() {
    return this.lista.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
  }
}
