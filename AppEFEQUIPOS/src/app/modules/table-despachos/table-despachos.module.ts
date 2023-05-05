import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDespachosComponent } from './table-despachos.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { TableDespachosRoutes } from './table-despachos.routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MenuModule,
    FooterModule,
    TableDespachosRoutes
  ],
  declarations: [TableDespachosComponent]
})
export class TableDespachosModule { }
