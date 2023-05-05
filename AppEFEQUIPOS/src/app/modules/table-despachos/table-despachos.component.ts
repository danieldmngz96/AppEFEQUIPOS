import { Component, OnInit } from '@angular/core';
import { DespachosService } from 'src/app/services/despachos.service';

@Component({
  selector: 'app-table-despachos',
  templateUrl: './table-despachos.component.html',
  styleUrls: ['./table-despachos.component.scss']
})
export class TableDespachosComponent implements OnInit {
  lista:any;
  constructor(private despachos: DespachosService,) { }

  ngOnInit() {
    this.listarDespachos();
  }
  //Aca traemos del servicio movimiento los empleados
  listarDespachos(){
    this.despachos.getDespachos().subscribe(
      res=>{
        this.lista = res
        console.log(res);
      },
      err=> console.log(err)
    );
  }
}
