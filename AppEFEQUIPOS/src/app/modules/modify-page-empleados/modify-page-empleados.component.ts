import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modify-page-empleados',
  templateUrl: './modify-page-empleados.component.html',
  styleUrls: ['./modify-page-empleados.component.scss']
})
export class ModifyPageEmpleadosComponent implements OnInit {
  empleadoForm: FormGroup | any;
  id:any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private activateRouter: ActivatedRoute,) {this.empleadoForm = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      cargo: new FormControl('', [Validators.required]),
      idEmpleado: new FormControl('', [Validators.required]),
    }); }

  ngOnInit() {
    this.id = this.activateRouter.snapshot.params['id'];
  }
}
