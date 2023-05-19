import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifyPageEmpleadosComponent } from './modify-page-empleados.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModifyPageEmpleadosRoutes } from './modify-page-empleados.routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MenuModule,
    FooterModule,
    ReactiveFormsModule,
    ModifyPageEmpleadosRoutes
  ],
  declarations: [ModifyPageEmpleadosComponent]
})
export class ModifyPageEmpleadosModule { }
