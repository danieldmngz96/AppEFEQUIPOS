import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DespachosService } from 'src/app/services/despachos.service';
import { ModalViewVehiculoComponent } from '../modal-view-vehiculo/modal-view-vehiculo.component';

@Component({
  selector: 'app-table-despachos',
  templateUrl: './table-despachos.component.html',
  styleUrls: ['./table-despachos.component.scss']
})
export class TableDespachosComponent implements OnInit {
  lista:any;
  constructor(private despachos: DespachosService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.listarDespachos();
  }
  //Aca traemos del servicio listar despachos
  listarDespachos(){
    this.despachos.getDespachos().subscribe(
      res=>{
        this.lista = res
        console.log(res);
      },
      err=> console.log(err)
    );
  }
  //Redirigir a modal de añadir maquinaria
  openModal(){
    const dialogRef = this.dialog.open(ModalViewVehiculoComponent, {
      width: '850px',
    });
  }
}
