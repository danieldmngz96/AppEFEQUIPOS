import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipo, MovimientosService } from 'src/app/services/movimientos.service';

@Component({
  selector: 'app-modify-page',
  templateUrl: './modify-page.component.html',
  styleUrls: ['./modify-page.component.scss']
})
export class ModifyPageComponent implements OnInit {
  machineForm: FormGroup;
  machineNew: Equipo = {
    id_equipo: '',
    nombre: '',
    logo: '',
    nombreCliente: '',
  }
  constructor(
    private movimiento: MovimientosService,
    private router:Router,
    private fb: FormBuilder,
  ) { this.machineForm = this.fb.group({

    nombre: ['', Validators.required],
    logo: ['', Validators.required],
    nombreCliente: ['', Validators.required]
  });}

  ngOnInit() {
  }
  addMachine(){
    this.movimiento.saveMachine(this.machineNew).subscribe(
      res=>{
        console.log(res);
        window.location.reload();
      },
      err=>{
        console.log(err);
      }
    );
  }
}
