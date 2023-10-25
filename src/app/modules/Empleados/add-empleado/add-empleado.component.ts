import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { ModalAddEmpleadoComponent } from '../modal-add-empleado/modal-add-empleado.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.scss']
})
export class AddEmpleadoComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Nombre', 'Cargo', 'Celular', 'e_mail', 'usuario'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  length: any;
  pageSize: any;
  pageSizeOptions: number[] = [ 10, 25, 100];
  pageIndex: number = 0;
  lista:any = new MatTableDataSource();
  page = 1;
  isPage = 1;
  descripcion:any;
  disabled: boolean = true;
  id: any;


  constructor(private empleados: EmpleadosService,
    public dialog: MatDialog,
    private router: Router) { }
  ngOnInit() {
    this.listarTeam();
  }
  //Aca traemos del servicio movimiento los empleados
  listarTeam(){
    this.empleados.getEmpleados().subscribe(
      res=>{
        this.lista = res
        console.log(res);
      },
      err=> console.log(err)
    );
  }

  //Redirigir a modal de añadir empleado
  openModal(){
    const dialogRef = this.dialog.open(ModalAddEmpleadoComponent, {
      width: '850px',
      height: '550px',
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
    this.listarTeam();
  }
  resetPaginator(): void {
      this.length = 0;
      this.pageSize = 5;
      this.page = 1;
      this.paginator.firstPage();
    }
}
