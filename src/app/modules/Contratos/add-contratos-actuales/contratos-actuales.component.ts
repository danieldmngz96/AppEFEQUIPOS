import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ContratosService } from 'src/app/services/contratos.service';

@Component({
  selector: 'app-contratos-actuales',
  templateUrl: './contratos-actuales.component.html',
  styleUrls: ['./contratos-actuales.component.scss']
})
export class ContratosActualesComponent implements OnInit {
  displayedColumns: string[] = ['cod_cont', 'nombre', 'cod_cli', 'fec_ini','fec_fin', 'estado'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  length: any;
  pageSize: any;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex: number = 0;
  lista = new MatTableDataSource();
  page = 1;
  constructor(private contratos: ContratosService,) { }

  ngOnInit() {
    this.listarContratos();
  }
   //Aca traemos del servicio movimiento los contratos
   listarContratos(){
    this.contratos.getContratos(this.page, this.pageSize).subscribe(
      (res:any) =>{
        this.lista.data = Object.values(res.rows)
        this.length = res.total
        console.log("respuesta de getcontratos" +res);
      },
      err=>{
        console.log(err)
        this.resetPaginator();
      }
      
    );
  }
  pageEvent(event: any): void {
    this.pageSize = event.pageSize;
    this.page = event.pageIndex + 1;
   
  }
  resetPaginator(): void {
      this.length = 0;
      this.pageSize = 5;
      this.page = 1;
      this.paginator.firstPage();
    }
}
