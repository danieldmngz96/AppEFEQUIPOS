import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDeleteEmpleadoComponent } from './table-delete-empleado.component';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { TableDeleteEmpleadoRoutes } from './table-delete-empleado.routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    FooterModule,
    TableDeleteEmpleadoRoutes,
    MaterialModule,
  ],
  declarations: [TableDeleteEmpleadoComponent]
})
export class TableDeleteEmpleadoModule { }
