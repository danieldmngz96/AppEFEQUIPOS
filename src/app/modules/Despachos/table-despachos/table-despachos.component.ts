import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DespachosService } from 'src/app/services/despachos.service';
import { ModalViewVehiculoComponent } from './../modal-view-vehiculo/modal-view-vehiculo.component';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-despachos',
  templateUrl: './table-despachos.component.html',
  styleUrls: ['./table-despachos.component.scss']
})
export class TableDespachosComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Descrpcion', 'Cantidad', 'cod_obra','cod_cont', 'fec_des','despachador','obs', 'info_veh'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  length: any;
  pageSize: any;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex: number = 0;
  lista:any = new MatTableDataSource();
  page = 1;
  constructor(private despachos: DespachosService,
    public dialog: MatDialog,
    private paginatorIntl: MatPaginatorIntl) { }

  ngOnInit() {
    this.listarDespachos();
  }
  ngAfterViewInit() {
    this.paginator?.page.subscribe((event) => {
      this.pageIndex = event.pageIndex;
    });

    this.paginatorIntl.itemsPerPageLabel = 'Elementos por página';
    this.paginator._intl = this.paginatorIntl;
  }
  //Aca traemos del servicio listar despachos
  listarDespachos() {
    this.despachos.getDespachos(this.page, this.pageSize).subscribe(
      (res:any) => {
        this.lista.data = Object.values(res.rows)
        this.length = res.total
        console.log(res);
      },
      err => {
        console.log(err)
        this.resetPaginator();
      }
    );
  }
  //Redirigir a modal de añadir maquinaria
  openModal(){
    const dialogRef = this.dialog.open(ModalViewVehiculoComponent, {
      width: '850px',
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
      this.listarDespachos();
    }
    resetPaginator(): void {
        this.length = 0;
        this.pageSize = 5;
        this.page = 1;
        this.paginator.firstPage();
      }
}
