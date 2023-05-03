import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { EmpleadosRoutes } from './empleados.routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MenuModule,
    FooterModule,
    EmpleadosRoutes,
    HttpClientModule
  ],
  declarations: [EmpleadosComponent]
})
export class EmpleadosModule { }
