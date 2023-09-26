import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import Swal from 'sweetalert2';
import { PqrsService, Pqrs } from 'src/app/services/pqrs.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.scss']
})
export class PqrsComponent implements OnInit {
  pqrsForm!: FormGroup;
  newPqrs: Pqrs = {
    name:"",
    direccion:"",
    //phone: "",
    city: "",
    country:"",
    email: "",
    pqrs:""
  }
  constructor(private pqrs: PqrsService, ) { }

  ngOnInit() {
    this.pqrsForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]), 
      phone: new FormControl('', [Validators.required , this.validatePhone.bind(this)]), 
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required , Validators.email]), 
      pqrs: new FormControl('', [Validators.required]), 
    });
   }

    // Validador personalizado para el campo phone
   validatePhone(control: AbstractControl): ValidationErrors | null {
    const phoneNumber = control.value;
    //Only numbers
    const phonePattern = /^\d+$/;
  
    if (!phonePattern.test(phoneNumber)) {
      return { invalidPhone: true }; // Devuelve un error si no contiene solo números
    }
  
    return null; // Si el número es válido
  }//end to ngonit


  addPqrs() {
    //console.log(this.newPqrs)
    let body = {
      name: this.pqrsForm.controls['name'].value,
      direccion: this.pqrsForm.controls['direccion'].value,
      phone: this.pqrsForm.controls['phone'].value,
      city: this.pqrsForm.controls['city'].value,
      country: this.pqrsForm.controls['country'].value,
      email: this.pqrsForm.controls['email'].value,
      pqrs: this.pqrsForm.controls['pqrs'].value,
    };
    console.log(body);
    
    this.pqrs.savePqrs(this.newPqrs).subscribe(
      res => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Excelente...',
          text: `Se ha creado PQRS ${this.pqrsForm.controls['pqrs'].value} exitosamente!`,
        });
       // this.dialogRef.close();
      },
      err => {
        console.log(err);
      }
    );
  }
}
