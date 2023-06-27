import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService, Team } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-modify-page-empleados',
  templateUrl: './modify-page-empleados.component.html',
  styleUrls: ['./modify-page-empleados.component.scss']
})
export class ModifyPageEmpleadosComponent implements OnInit {
  empleadoForm: FormGroup | any;
  id:any;
  teamForm: Team = {
    nombre: "",
    cargo: "",
    idEmpleado: "",
    celular: "",
    email: ""
  };
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private activateRouter: ActivatedRoute,
    private empleadosService: EmpleadosService,
    ) {this.empleadoForm = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      cargo: new FormControl('', [Validators.required]),
      idEmpleado: new FormControl('', [Validators.required]),
      celular: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    }); }

  ngOnInit() {
    this.id = this.activateRouter.snapshot.params['id'];
    console.log(this.id, this.teamForm);
  }
}
