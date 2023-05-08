import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-modify-empleado',
  templateUrl: './modify-empleado.component.html',
  styleUrls: ['./modify-empleado.component.scss']
})
export class ModifyEmpleadoComponent implements OnInit {
  lista:any;

  constructor(private empleados: EmpleadosService,
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
  gotoPageModify(){
    this.router.navigate(['/empleados/page']);
  }
}
