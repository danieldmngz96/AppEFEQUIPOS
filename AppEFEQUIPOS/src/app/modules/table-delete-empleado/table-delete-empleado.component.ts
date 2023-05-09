import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-table-delete-empleado',
  templateUrl: './table-delete-empleado.component.html',
  styleUrls: ['./table-delete-empleado.component.scss']
})
export class TableDeleteEmpleadoComponent implements OnInit {

  lista:any;
  constructor(private empleado: EmpleadosService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.listarEquipo();
  }
  //Aca traemos del servicio movimiento los equipos
  listarEquipo(){
    this.empleado.getEmpleados().subscribe(
      res=>{
        this.lista = res
        console.log(res);
      },
      err=> console.log(err)
    );
  }

  DeleteMachine(id:string){
    this.empleado.deleteEmpleado(id).subscribe(res=>{this.ngOnInit();},
    err=>{console.log(err);}
  );

  }
}
