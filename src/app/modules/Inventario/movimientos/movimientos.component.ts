import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MovimientosService } from 'src/app/services/movimientos.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.scss']
})
export class MovimientosComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Descrpcion', 'Cantidad', 'Peso_Kg', 'Area m_2', 'Peso Total','Area Total'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  length: any;
  pageSize: any;
  pageSizeOptions: number[] = [ 10, 25, 100,150,200,250,300,350,400,500,+1000];
  pageIndex: number = 0;
  lista = new MatTableDataSource();
  page = 1;
  isPage = 1;
  descripcion:any;
  disabled: boolean = true;
  id: any;
  //lista: any;

  constructor(private movimiento: MovimientosService,
    private paginatorIntl: MatPaginatorIntl) { }


  ngOnInit() {
    this.listarEquipo();
  }
  ngAfterViewInit() {
    this.paginator?.page.subscribe((event) => {
      this.pageIndex = event.pageIndex;
    });

    this.paginatorIntl.itemsPerPageLabel = 'Elementos por página';
    this.paginator._intl = this.paginatorIntl;
  }
  //Aca traemos del servicio movimiento los equipos
  listarEquipo() {
    this.movimiento.getEquipos(this.page, this.pageSize).subscribe(
      (res:any) => {
        this.lista.data = Object.values(res)
        this.length = res.total
      },
      err => {
        console.log(err)
        this.resetPaginator();
      }
    );
  }
/*   ngAfterViewInit() {
    this.paginator?.page.subscribe(
      (event) => {
        this.pageIndex = event.pageIndex;
      }
    )
  } */


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

