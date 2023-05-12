import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DespachosService } from 'src/app/services/despachos.service';

@Component({
  selector: 'app-add-despachos',
  templateUrl: './add-despachos.component.html',
  styleUrls: ['./add-despachos.component.scss']
})
export class AddDespachosComponent implements OnInit {


  lista:any;

  constructor(private despachos: DespachosService,
    public dialog: MatDialog,
    private router: Router) { }
  ngOnInit() {
    this.listarTeam();
  }
  //Aca traemos del servicio movimiento los empleados
  listarTeam(){
    this.despachos.getDespachos().subscribe(
      res=>{
        this.lista = res
        console.log(res);
      },
      err=> console.log(err)
    );
  }


goToDespachosFrom(){
  this.router.navigate(['/despachos/add-form']);
}
}
