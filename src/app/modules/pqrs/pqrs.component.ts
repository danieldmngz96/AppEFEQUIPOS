import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.scss']
})
export class PqrsComponent implements OnInit {
  pqrsForm!: FormGroup;
  constructor() { }

  ngOnInit() {
    this.pqrsForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]), 
      phone: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      contry: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]), 
      pqrs: new FormControl('', [Validators.required]), 
    });
  }

}
