import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddMachineComponent } from '../add-machine/add-machine.component';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalAddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddMachineComponent>,
    @Inject(MAT_DIALOG_DATA) public data: "") { }

  ngOnInit() {
  }

}
