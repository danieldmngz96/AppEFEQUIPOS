import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TableDespachosComponent } from './../table-despachos/table-despachos.component';
import { DespachosService } from 'src/app/services/despachos.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-modal-view-vehiculo',
  templateUrl: './modal-view-vehiculo.component.html',
  styleUrls: ['./modal-view-vehiculo.component.scss']
})
export class ModalViewVehiculoComponent implements OnInit {
  displayedColumns: string[] = ['Id despacho', 'Conductor vehiculo', 'Placa Vehiculo', 'Tipo Vehiculo', 'Autorizador', 'Peso total', 'Area total'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  length: any;
  pageSize: any;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex: number = 0;
  lista = new MatTableDataSource();
  page = 1;
  constructor(private despachos: DespachosService,
    public dialogRef: MatDialogRef<TableDespachosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: "",) { }

  ngOnInit() {
    this.listarInfoVehiculo();
  }
  //Aca traemos del servicio listar despachos
  /* listarInfoVehiculo(){
    this.despachos.getDespachos().subscribe(
      res=>{
        this.lista = res
        console.log(res);
      },
      err=> console.log(err)
    );
  } */

  listarInfoVehiculo() {
    this.despachos.getDespachos(this.page, this.pageSize).subscribe(
      (res: any) => {
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
  /**
      * @author Daniel Dominguez
      * @createdate 2021-04-12
      * Metodo de paginación
      */
  pageEvent(event: any): void {
    this.pageSize = event.pageSize;
    this.page = event.pageIndex + 1;
    this.listarInfoVehiculo();
  }
  resetPaginator(): void {
    this.length = 0;
    this.pageSize = 5;
    this.page = 1;
    this.paginator.firstPage();
  }
}
