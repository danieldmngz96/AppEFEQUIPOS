import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'nombre', 'id_cargo', 'celular', 'e_mail', 'usuario'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  length: any;
  pageSize: any;
  pageSizeOptions: number[] = [ 10, 25, 100,150,200,250,300];
  pageIndex: number = 0;
  lista = new MatTableDataSource();
  page = 1;
  isPage = 1;
  descripcion:any;
  disabled: boolean = true;
  id: any;
  //lista: any;

  constructor(private empleados: EmpleadosService,
    private paginatorIntl: MatPaginatorIntl) { }
  ngOnInit() {
    this.listarTeam();
  }

  ngAfterViewInit() {
    this.paginator?.page.subscribe((event) => {
      this.pageIndex = event.pageIndex;
    });
    this.paginatorIntl.itemsPerPageLabel = 'Elementos por página';
    this.paginator._intl = this.paginatorIntl;
  }
  //Aca traemos del servicio movimiento los empleados
  listarTeam(){
    this.empleados.getEmpleados(this.page, this.pageSize).subscribe(
      (res:any)=>{
        this.lista.data = Object.values(res)
        this.length = res.total;
        console.log(res)
      },
      err=> {
        console.log(err)
        this.resetPaginator();
      }
    );
  }
    /**
     * @author Daniel Dominguez
     * @createdate 2021-04-12
     * Metodo de paginación
     */
    pageEvent(event: any): void {
      this.pageSize = event.pageSize;
      this.page = event.pageIndex + 1;
      this.listarTeam();
    }
    resetPaginator(): void {
        this.length = 0;
        this.pageSize = 5;
        this.page = 1;
        this.paginator.firstPage();
      }
}
