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
  lista: any;
  page = 1;
  isPage = 1;


  constructor(private movimiento: MovimientosService,) { }


  ngOnInit() {
    this.listarEquipo();
  }
  //Aca traemos del servicio movimiento los equipos
  listarEquipo() {
    this.movimiento.getEquipos().subscribe(
      (res:any) => {
        this.lista = Object.values(res.rows)
        this.length = Object.values(res.total)
        console.log(res);
      },
      err => {
        console.log(err)
        this.resetPaginator();
      }
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
  /**
     * @author Daniel Dominguez
     * @createdate 2021-04-12
     * Metodo de paginación
     */
  pageEvent(event: any): void {
    this.pageSize = event.pageSize;
    this.page = event.pageIndex + 1;
    this.listarEquipo();
  }
  resetPaginator(): void {
      this.length = 0;
      this.pageSize = 5;
      this.page = 1;
      this.paginator.firstPage();
    }
  }

