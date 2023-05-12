import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Despachos, DespachosService } from 'src/app/services/despachos.service';

@Component({
  selector: 'app-despachos-add-form',
  templateUrl: './despachos-add-form.component.html',
  styleUrls: ['./despachos-add-form.component.scss']
})
export class DespachosAddFormComponent implements OnInit {

  stepOneForm: FormGroup;
  stepInfoVehiculo: FormGroup;


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  despachosNew: Despachos = {
    "cod_obra":"",
    "cod_cont":"",
    "fec_des":"",
    "despachador":"",
    "obs":"",
    "conductor_veh":"",
    "tipo_veh":"",
    "autorizador":"",
    "peso_total":"",
    "area_total":"",
    "id_despacho":"",
    "placa_veh":"",
  }
  constructor(private _formBuilder: FormBuilder,
    private fb: FormBuilder,
    private despachos:DespachosService ) {  this.stepOneForm = this.fb.group({

      cod_obra: new FormControl('', Validators.required),
      cod_cont: new FormControl('', Validators.required),
      fec_des: new FormControl(new Date(2020,5,1)),
      despachador : new FormControl('', Validators.required),
      obs : new FormControl('', Validators.required),
    /*   id_despacho : new FormControl('', Validators.required), */
    });

    this.stepInfoVehiculo = this.fb.group({
      conductor_veh: new FormControl('', Validators.required),
      placa_veh: new FormControl('', Validators.required),
      tipo_veh: new FormControl('', Validators.required),
      peso_total: new FormControl('', Validators.required),
      autorizador: new FormControl('', Validators.required),
      area_total: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }
  addDepachos(){
    this.despachos.saveDespachos(this.despachosNew).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    );
  }
}
