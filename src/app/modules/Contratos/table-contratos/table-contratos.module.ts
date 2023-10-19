import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableContratosComponent } from './table-contratos.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { TableContratosRoutes } from './table-contratos.routing.module';
import { TableDespachosRoutes } from '../../Despachos/table-despachos/table-despachos.routing.module';

@NgModule({
  imports: [
    CommonModule, 
    MaterialModule,
    MenuModule,
    FooterModule,
    TableContratosRoutes
  ],
  declarations: [TableContratosComponent]
})
export class TableContratosModule { }
