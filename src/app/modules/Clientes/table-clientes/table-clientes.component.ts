import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-table-clientes',
  templateUrl: './table-clientes.component.html',
  styleUrls: ['./table-clientes.component.scss']
})
export class TableClientesComponent implements OnInit {
  //lista: any;
  displayedColumns: string[] = ['Id', 'Nombre Cliente', 'Dirrecion', 'Nombre Obra', 'Ing a cargo', 'NIT', 'Telefono', 'Ciudad', 'Departamento','Modificar'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  length: any;
  pageSize: any;
  pageSizeOptions: number[] = [10, 25, 50, 100, 150, 200, 250];
  pageIndex: number = 0;
  lista = new MatTableDataSource();
  page = 1;
  isPage = 1;
  descripcion: any;
  disabled: boolean = true;
  id: any;
  constructor(private clientes: ClientesService, private paginatorIntl: MatPaginatorIntl) { }

  ngOnInit() {
    this.listarClientes();
  }
  ngAfterViewInit() {
    this.paginator?.page.subscribe((event) => {
      this.pageIndex = event.pageIndex;
    });

    this.paginatorIntl.itemsPerPageLabel = 'Elementos por página';
    this.paginator._intl = this.paginatorIntl;
  }
  //Aca traemos del servicio movimiento los equipos
  listarClientes() {
    this.clientes.getClientes(this.page, this.pageSize).subscribe(
      (res:any) => {
        this.lista.data = Object.values(res)
        this.length = res.total
      },
      err => {console.log(err)
      this.resetPaginator();
    });
  }
    /**
     * @author Daniel Dominguez
     * @createdate 2021-04-12
     * Metodo de paginación
     */
    pageEvent(event: any): void {
      this.pageSize = event.pageSize;
      this.page = event.pageIndex + 1;
      this.listarClientes();
    }
    resetPaginator(): void {
        this.length = 0;
        this.pageSize = 5;
        this.page = 1;
        this.paginator.firstPage();
      }
}
