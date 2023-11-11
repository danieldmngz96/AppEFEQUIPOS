import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimientosComponent } from './movimientos.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { MovimientosRoutingModule } from './movimientos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MenuModule,
    FooterModule,
    MovimientosRoutingModule
  ],
  declarations: [MovimientosComponent]
})
export class MovimientosModule { }
