import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifyPageClienteComponent } from './modify-page-cliente.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModifyPageClienteRoutes } from './modify-page-cliente.routing.module';

@NgModule({
  imports: [
    MenuModule,
    FooterModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ModifyPageClienteRoutes
  ],
  declarations: [ModifyPageClienteComponent],
  exports:[
  ]
})
export class ModifyPageClienteModule { }
