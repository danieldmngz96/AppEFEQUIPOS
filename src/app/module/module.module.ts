import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleComponent } from './module.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ModuleComponent]
})
export class ModuleModule { }
