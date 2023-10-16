import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Inventario, MovimientosService, Productos } from 'src/app/services/movimientos.service';
import { ModalAddComponent } from '../modal-add-machine/modal-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-add-machine',
  templateUrl: './add-machine.component.html',
  styleUrls: ['./add-machine.component.scss']
})
export class AddMachineComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Descrpcion', 'Cantidad', 'Peso_Kg', 'Area m_2', 'Peso Total','Area Total','Añadir'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  length: any;
  pageSize: any;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex: number = 0;
  //lista = new MatTableDataSource();
  page = 1;
  isPage = 1;
  descripcion:any;
  disabled: boolean = true;
  id: any;
  lista: any;
  inventario: Inventario = {
    id_inventario: "",
    descripcion: "",
    cantidad: "",
    peso_kg: "",
    area_m2: "",
    peso_total: "",
    area_total: "",
  };

  productos : Productos = {
    cod_prod: "any",
    tipo: "any",
    descripcion: "any",
    cantidad: "any",
    valor_uni: "any",
    peso_uni: "any",
    area: "any",
    peso_total: "any",
    area_total: "any",
  }

  
  constructor(private movimiento: MovimientosService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.listarEquipo();
  }
  //Aca traemos del servicio movimiento los equipos
  listarEquipo(){
    this.movimiento.getEquipos().subscribe(
      res=>{
        this.lista = res
        console.log(res);
      },
      err=> console.log(err)
    );
  }
  //Redirigir a modal de añadir maquinaria
  openModal(){
    const dialogRef = this.dialog.open(ModalAddComponent, {
      width: '550px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.listarEquipo();
    });
  }

    resetPaginator(): void {
    this.length = 0;
    this.pageSize = 5;
    this.page = 1;
    this.paginator.firstPage();
  }
  pageEvent(event: any): void {
    this.pageSize = event.pageSize;
    this.page = event.pageIndex + 1;
    this.listarEquipo();
  }
}
