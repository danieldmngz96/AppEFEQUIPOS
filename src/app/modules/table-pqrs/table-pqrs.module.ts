import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePqrsComponent } from './table-pqrs.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { TableRouteRoutes } from './table-pqrs.routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MenuModule,
    FooterModule,
    TableRouteRoutes
  ],
  declarations: [TablePqrsComponent]
})
export class TablePqrsModule { }
