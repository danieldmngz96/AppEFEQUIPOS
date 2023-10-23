import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratosActualesComponent } from './contratos-actuales.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { ContratosActualesRoutes } from './contratos-actuales.routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MenuModule,
    FooterModule,
    ContratosActualesRoutes
  ],
  declarations: [ContratosActualesComponent]
})
export class ContratosActualesModule { }
