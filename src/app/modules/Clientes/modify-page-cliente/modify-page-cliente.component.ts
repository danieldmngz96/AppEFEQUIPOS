import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client, ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modify-page-cliente',
  templateUrl: './modify-page-cliente.component.html',
  styleUrls: ['./modify-page-cliente.component.scss']
})
export class ModifyPageClienteComponent implements OnInit {
  clienteForm: FormGroup;
  lista: any;
  id: any | null;
  cliente: Client = {
    "nom_cliente": "",
    "direccion": "",
    "nombre_obra": "",
    "cargo_obra": "",
    "NIT": "",
    "celular": "",
    "ciudad": "",
    "departamento": "",
  };
  constructor(private clientes: ClientesService,
    private router: Router,
    private fb: FormBuilder,
    private activateRouter: ActivatedRoute,) {
    this.clienteForm = this.fb.group({
      nom_cliente: new FormControl('', [Validators.required]),
      NIT: new FormControl('', [Validators.required]),
      cargo_obra: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      celular: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
      departamento: new FormControl('', [Validators.required]),
      nombre_obra: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {

    this.id = this.activateRouter.snapshot.params['id'];
    console.log(this.id, this.clienteForm);

    this.clientes.getClienteId(this.id).subscribe(
      (res: any) => {
        this.cliente = res;
        console.log("aqui esta la respuesta del serrver a pintar", res);
        this.clienteForm.controls['nom_cliente'].setValue(res[0].nom_cliente); // Actualizamos el valor del formulario con los datos del cliente
        this.clienteForm.controls['NIT'].setValue(res[0].NIT); // Actualizamos el valor del formulario con los datos del cliente
        this.clienteForm.controls['cargo_obra'].setValue(res[0].cargo_obra); // Actualizamos el valor del formulario con los datos del cliente
        this.clienteForm.controls['direccion'].setValue(res[0].direccion); // Actualizamos el valor del formulario con los datos del cliente
        this.clienteForm.controls['celular'].setValue(res[0].celular);
        this.clienteForm.controls['ciudad'].setValue(res[0].ciudad);
        this.clienteForm.controls['departamento'].setValue(res[0].departamento);
        this.clienteForm.controls['nombre_obra'].setValue(res[0].nombre_obra);

      },
      err => {
        console.log(err);
      }
    );

  }


  //Aca traemos del servicio movimiento los equipos
  listarClientes() {
    this.clientes.getClienteId(this.id).subscribe(
      res => {
        this.lista = res
        console.log(res);
      },
      err => console.log(err)
    );
  }

    //Aca traemos del servicio movimiento para modificar el modificar elemento
    modifyClientes() {
      const nombreClienteControl = this.clienteForm.get('nom_cliente');
      const NITControl = this.clienteForm.get('NIT');
      const cargo_obraControl = this.clienteForm.get('cargo_obra');
      const direccionControl = this.clienteForm.get('direccion');
      const celularControl = this.clienteForm.get('celular');
      const ciudadControl = this.clienteForm.get('ciudad');
      const departamentoControl = this.clienteForm.get('departamento');
      const nombre_obraControl = this.clienteForm.get('nombre_obra');

      if (
        nombreClienteControl &&
        NITControl &&
        cargo_obraControl &&
        direccionControl &&
        celularControl &&
        ciudadControl &&
        departamentoControl &&
        nombre_obraControl
      ) {
        this.cliente.nom_cliente = nombreClienteControl.value;
        this.cliente.NIT = NITControl.value;
        this.cliente.cargo_obra = cargo_obraControl.value;
        this.cliente.direccion = direccionControl.value;
        this.cliente.celular = celularControl.value;
        this.cliente.ciudad = ciudadControl.value;
        this.cliente.departamento = departamentoControl.value;
        this.cliente.nombre_obra = nombre_obraControl.value;

        this.clientes.EditCliente(this.id, this.cliente).subscribe(
          res => {
            Swal.fire({
              icon: 'success',
              title: 'Éxito!',
              text: `Se ha modificado con los siguientes valores:\n\n` +
                `Nombre de cliente: ${nombreClienteControl.value}\n` +
                `NIT: ${NITControl.value}\n` +
                `Cargo de obra: ${cargo_obraControl.value}\n` +
                `Dirección: ${direccionControl.value}\n\n` +
                `¡Modificado exitosamente!`,
              confirmButtonText: 'Aceptar',
            });
            console.log(res);
          },
          err => {
            console.log(err);
          }
        );
      }
    }

  }

