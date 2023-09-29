import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Pqrs, PqrsService } from 'src/app/services/pqrs.service';

@Component({
  selector: 'app-table-pqrs',
  templateUrl: './table-pqrs.component.html',
  styleUrls: ['./table-pqrs.component.scss']
})
export class TablePqrsComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Nombre', 'Empresa', 'direccion','telefono', 'celular','ciudad','pais','e_mail','obs'];
  lista = new MatTableDataSource();
  length: any;
  pageSize: any;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  page = 1;
  paginator!: MatPaginator;
  pageIndex: number = 0;
  constructor(private paginatorIntl: MatPaginatorIntl,
    private pqrs: PqrsService,
    ) { }

  ngOnInit() {
    this.listarPqrs();
  }
  ngAfterViewInit() {
    this.paginator?.page.subscribe((event) => {
      this.pageIndex = event.pageIndex;
    });
    this.paginatorIntl.itemsPerPageLabel = 'Elementos por página';
    this.paginator._intl = this.paginatorIntl;
  }
  //Aca traemos del servicio listar pqrs
  listarPqrs(){
    this.pqrs.getPqrs(this.page , this.pageSize).subscribe(
      (res:any) => {
        this.lista.data = Object.values(res.rows)
        this.length = res.total
        console.log(res);
      },
      err => {
        console.log(err)
        this.resetPaginator();
      }
    )
  }
    /**
     * @author Daniel Dominguez
     * @createdate 2021-04-12
     * Metodo de paginación
     */
    pageEvent(event: any): void {
      this.pageSize = event.pageSize;
      this.page = event.pageIndex + 1;
      this.listarPqrs();
    }
    resetPaginator(): void {
      this.length = 0;
      this.pageSize = 5;
      this.page = 1;
      this.paginator.firstPage();
    }
}
