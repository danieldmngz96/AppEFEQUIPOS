import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client, ClientesService } from 'src/app/services/clientes.service';
import { Contrato, ContratosService } from 'src/app/services/contratos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-contratos',
  templateUrl: './add-contratos.component.html',
  styleUrls: ['./add-contratos.component.scss']
})
export class AddContratosComponent implements OnInit {
  clientes:any []=[];
  addContratosForm: FormGroup;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  
  contratoNew: Contrato = {
    "nombre": "",
    "cod_cli": "",
    "fec_ini": "",
    "fec_fin": "",
    "estado": "",
  }
  constructor(private _formBuilder: FormBuilder,
    private router: Router,
    private fb: FormBuilder,
    private cliente:ClientesService,
    private contrato:ContratosService ) {  this.addContratosForm = this.fb.group({
      nombre: new FormControl('', Validators.required),
      cod_cli: new FormControl('', Validators.required),
      fec_ini: new FormControl('', Validators.required),
      fec_fin: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required)
    });


  }

  ngOnInit() {
    this.cliente.getClientes().subscribe((res:any)=>{
      this.clientes = res;
    })
  }
  addContrato() {
    console.log(this.contratoNew);
    this.contrato.saveContrato(this.contratoNew).subscribe(
      (res:any) => {
        console.log(res);

        Swal.fire({
          icon: 'success',
          title: 'Excelente...',
          text: `Se ha creado tu Contrato ${res.message} exitosamente!`,
        }).then(() => {
          this.router.navigate(['contratos/actuales']); // Redirige a la página de clientes
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
