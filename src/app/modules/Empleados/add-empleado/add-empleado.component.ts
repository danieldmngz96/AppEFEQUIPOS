import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { ModalAddEmpleadoComponent } from '../modal-add-empleado/modal-add-empleado.component';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.scss']
})
export class AddEmpleadoComponent implements OnInit {

  lista:any;

  constructor(private empleados: EmpleadosService,
    public dialog: MatDialog) { }
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
      width: '350px',
      height: '450px',
    });
  }
}
