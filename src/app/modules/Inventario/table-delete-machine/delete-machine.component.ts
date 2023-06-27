import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MovimientosService } from 'src/app/services/movimientos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-machine',
  templateUrl: './delete-machine.component.html',
  styleUrls: ['./delete-machine.component.scss']
})
export class DeleteMachineComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Descrpcion', 'Cantidad', 'Peso_Kg', 'Area m_2', 'Peso Total','Area Total', 'Eliminar'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  length: any;
  pageSize: any;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex: number = 0;
  lista = new MatTableDataSource();
  page = 1;
  isPage = 1;
  descripcion:any
  //lista: any;
  constructor(private movimiento: MovimientosService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.listarEquipo();
  }
  //Aca traemos del servicio movimiento los equipos
    //Aca traemos del servicio movimiento los equipos
    listarEquipo() {
      this.movimiento.getEquipos(this.page, this.pageSize).subscribe(
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

  DeleteMachine(id: string) {
      Swal.fire({
        icon: 'warning',
        title: 'Cuidado!',
        text: `Se ha eliminara tu elemento ${this.descripcion} del inventario de efequipos exitosamente!`,
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          this.movimiento.deleteEquipo(id).subscribe(res => { this.ngOnInit(); },
          err => { console.log(err); })
        } else {
          // Acción al hacer clic en "Cancelar"
        }
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
    this.listarEquipo();
  }
  resetPaginator(): void {
      this.length = 0;
      this.pageSize = 5;
      this.page = 1;
      this.paginator.firstPage();
    }
}
