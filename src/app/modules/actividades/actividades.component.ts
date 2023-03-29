import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActividadesService } from 'src/app/services/actividades.service';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit {
  max: any;
  visible = true;
  name_activity1: any = []
  name_activity2: any = []
  name_activity3: any = []
  name_activity4: any = []
  name_activity5: any = []
  machines: any[] = [];
  isLinear = false;
  fecha = new Date();
  name: any = '';
  stepOneFormOne = true;
  onlyNumbers = /^[0-9]+$/;
  //FormGroup de los steps
  stepOneForm = new FormGroup({
    nameCultivo: new FormControl('', Validators.required),
    dateCultivo: new FormControl(new Date(2020,0,1)),
    dateCultivoOnlyMonth: new FormControl(new Date(2020,0,1)),
    mumberHectaria : new FormControl('', [Validators.required, Validators.pattern(this.onlyNumbers)]),
    checkMachine: new FormControl('', Validators.required),
    machineOne : new FormControl('', Validators.required),
    machineTwo : new FormControl('', Validators.required),
    machineThere : new FormControl('', Validators.required),
    machineFour : new FormControl('', Validators.required),
    machineFive : new FormControl('', Validators.required),
    addMachine : new FormControl('', Validators.required),
  });

  stepTwoForm = new FormGroup({
    preparacionSuelo: new FormControl('', Validators.required),
    siembraCultivo: new FormControl('', Validators.required),
    laboresCultivo: new FormControl('', Validators.required),
    cosecha: new FormControl('', Validators.required),
    empaqueCultivo: new FormControl('', Validators.required)
  });

   formAddMachine = new FormGroup({
    checkMachine: new FormControl('', Validators.required),
    machineOneAdd:  new FormControl('', Validators.required),
    machineTwoAdd: new FormControl('', Validators.required),
    machineThereAdd: new FormControl('', Validators.required),
    machineFourAdd:  new FormControl('', Validators.required),
    machineFiveAdd:  new FormControl('', Validators.required),
  });

  constructor(private router: Router,
    private _formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private activity: ActividadesService,
    private fb: FormBuilder) {
 }

  ngOnInit() {
    const data = localStorage.getItem('user');
    this.name = JSON.parse(data || '');
    this.fecha = new Date();

    this.activity.getActividades1().subscribe(data => {
      this.name_activity1 = data
    });

    this.activity.getActividades2().subscribe(data => {
      this.name_activity2 = data
    });

    this.activity.getActividades3().subscribe(data => {
      this.name_activity3 = data
    });

    this.activity.getActividades4().subscribe(data => {
      this.name_activity4 = data
    });

    this.activity.getActividades5().subscribe(data => {
      this.name_activity5 = data
    });
  }

  saveForm(){
    let data = JSON.parse(localStorage.getItem('id_user') || '');


  let body = {
    "id_user": data.id_user,
    "crop_name": this.stepOneForm.controls.nameCultivo.value,
    "month_begin_prod": this.stepOneForm.controls.dateCultivo.value,
    "area_field_prod_m2": this.stepOneForm.controls.mumberHectaria.value,
    "own_machines": this.stepOneForm.controls.checkMachine.value == "1" ? 'si':'no',
    "machine_name": this.stepOneForm.controls.machineOne.value,
    "machines_cost": "75|2.1",
    "machine_expect_time_life": "7|3",
    "field_preparation": "0|1|2|3",
    "planting_process": "0|1",
    "crop_processes": "0|1|3|4",
    "harvest_process": "0|1",
    "packing_process": "0|1",
    "is_crop_active": "Si",
    "close_crop_date": "",
    "record_date_table": "",
    "last_update_date": ""
  };
  }
  //tratamos de convertir DD/MM/YYYY a MM/YYYY
 /*  dateCultivo(event: MatDatepickerInputEvent<Date>) {
    const formattedDate = this.datePipe.transform(event.value, 'MM/yyyy');
    this.stepOneForm.get('dateCultivo')?.setValue(formattedDate);
  } */


  lookForActivity(event: any) {
    console.log(event);
    this.activity.getActividades1().subscribe(data => {
      this.name_activity1 = data;
      console.log(data); })
  }

  lookForActivity2(event: any) {
    console.log(event);
    this.activity.getActividades2().subscribe(data => {
      this.name_activity2 = data;
      console.log(data); })
  }

   lookForActivity3(event: any) {
    console.log(event);
    this.activity.getActividades3().subscribe(data => {
      this.name_activity3 = data;
      console.log(data); })
  }
  addMachine() {
    for(let i=0; i<10; i++) {
      this.machines.push({});
      const controlName = 'machine' + (i + 6);
    //this.formAddMachine.addControl(controlName, new FormControl('', Validators.required));
    }
  }

}
