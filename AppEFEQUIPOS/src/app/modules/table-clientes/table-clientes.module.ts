import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableClientesComponent } from './table-clientes.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { TableClientesRoutes } from './table-clientes.routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MenuModule,
    FooterModule,
    TableClientesRoutes,
    FormsModule
  ],
  declarations: [TableClientesComponent]
})
export class TableClientesModule { }
