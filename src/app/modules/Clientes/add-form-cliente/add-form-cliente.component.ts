import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client, ClientesService } from 'src/app/services/clientes.service';
import { DespachosService } from 'src/app/services/despachos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-form-cliente',
  templateUrl: './add-form-cliente.component.html',
  styleUrls: ['./add-form-cliente.component.scss']
})
export class AddFormClienteComponent implements OnInit {

  stepOneForm: FormGroup;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  isLinear = false;
  clienteNew: Client = {
    "nom_cliente": "",
    "direccion": "",
    "nombre_obra": "",
    "cargo_obra": "",
    "NIT": "",
    "celular": "",
    "ciudad": "",
    "departamento": "",

  }
  constructor(private _formBuilder: FormBuilder,
    private router: Router,
    private fb: FormBuilder,
    private client:ClientesService ) {  this.stepOneForm = this.fb.group({
      nom_cliente: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      nombre_obra: new FormControl('', Validators.required),
      cargo_obra: new FormControl('', Validators.required),
      NIT: new FormControl('', Validators.required),
      celular : new FormControl('', Validators.required),
      ciudad : new FormControl('', Validators.required),
      departamento : new FormControl('', Validators.required),
    });


  }

  ngOnInit() {
  }
  addClient() {
    this.client.saveClient(this.clienteNew).subscribe(
      (res:any) => {
        console.log(res);
        const clientId = res.id; // Obtén el ID del cliente desde la respuesta
  
        Swal.fire({
          icon: 'success',
          title: 'Excelente...',
          text: `Se ha creado tu cliente ${this.stepOneForm.controls['nom_cliente'].value} exitosamente!`,
        }).then(() => {
          this.router.navigate(['clientes/all']); // Redirige a la página de clientes
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
  

}
