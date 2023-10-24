import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventario, MovimientosService, Productos } from 'src/app/services/movimientos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-modify-machine',
  templateUrl: './modify-machine.component.html',
  styleUrls: ['./modify-machine.component.scss']
})
export class ModifyMachineComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Descrpcion', 'Cantidad', 'Peso_Kg', 'Area m_2', 'Peso Total','Area Total','Modificar'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  length: any;
  pageSize: any;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex: number = 0;
  lista = new MatTableDataSource();
  page = 1;
  isPage = 1;
  descripcion:any;
  disabled: boolean = true;
  id: any;
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

  constructor(private movimiento: MovimientosService, private paginatorIntl: MatPaginatorIntl,
    private router: Router,
    private fb: FormBuilder,
    private activateRouter: ActivatedRoute,
   ) {

    }

  ngOnInit() {
    this.listarEquipo();
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
