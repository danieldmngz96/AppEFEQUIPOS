import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifyEmpleadoComponent } from './modify-empleado.component';
import { ModifyEmpleadoRoutes } from './modify-empleado.routing.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    ModifyEmpleadoRoutes,
    MaterialModule,
    MenuModule,
    FooterModule,
    ReactiveFormsModule
  ],
  declarations: [ModifyEmpleadoComponent]
})
export class ModifyEmpleadoModule { }
