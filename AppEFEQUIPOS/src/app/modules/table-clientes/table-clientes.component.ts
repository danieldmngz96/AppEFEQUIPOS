import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-table-clientes',
  templateUrl: './table-clientes.component.html',
  styleUrls: ['./table-clientes.component.scss']
})
export class TableClientesComponent implements OnInit {
lista: any;
  constructor(private clientes: ClientesService,) { }

  ngOnInit() {
    this.listarClientes();
  }
 //Aca traemos del servicio movimiento los equipos
 listarClientes(){
  this.clientes.getClientes().subscribe(
    res=>{
      this.lista = res
      console.log(res);
    },
    err=> console.log(err)
  );
}
}
