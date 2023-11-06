import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ObrasService } from 'src/app/services/obras.service';

@Component({
  selector: 'app-table-obras',
  templateUrl: './table-obras.component.html',
  styleUrls: ['./table-obras.component.scss']
})
export class TableObrasComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Nombre', 'fec_ini', 'fec_fin', 'dir_obra', 'ciudad_obra','nom_ingeniero', 'tel_obra' , 'dir_entrega_fac', 'obra','estado','val_metro','porcentaje'];
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
  constructor(private obras: ObrasService,
    private paginatorIntl: MatPaginatorIntl) { }

  ngOnInit() {
    this.listarObras();
  }
  ngAfterViewInit() {
    this.paginator?.page.subscribe((event) => {
      this.pageIndex = event.pageIndex;
    });

    this.paginatorIntl.itemsPerPageLabel = 'Elementos por página';
    this.paginator._intl = this.paginatorIntl;
  }
  /**
     * @author Daniel Dominguez
     * @createdate 2021-04-12
     * Metodo de paginación
     */
  pageEvent(event: any): void {
    this.pageSize = event.pageSize;
    this.page = event.pageIndex + 1;
    this.listarObras();
  }
  //Aca traemos del servicio movimiento los equipos
  listarObras() {
    this.obras.getObras(this.page, this.pageSize).subscribe(
      (res:any) => {
        this.lista.data = Object.values(res)
        this.length = res.total
        console.log(res)
      },
      err => {
        console.log(err)
        this.resetPaginator();
      }
    );
  }
  resetPaginator(): void {
      this.length = 0;
      this.pageSize = 5;
      this.page = 1;
      this.paginator.firstPage();
    }
}
