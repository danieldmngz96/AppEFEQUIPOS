import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContratosComponent } from './add-contratos.component';
import { AddContratosRoutes } from './add-contratos.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AddContratosRoutes
  ],
  declarations: [AddContratosComponent],
  exports: [AddContratosComponent]
})
export class AddContratosModule { }
