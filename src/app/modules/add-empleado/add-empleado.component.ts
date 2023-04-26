import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.scss']
})
export class AddEmpleadoComponent implements OnInit {

  lista:any;

  constructor(private empleados: EmpleadosService,) { }
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
}
