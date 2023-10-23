import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContratosComponent } from './add-contratos.component';
import { AddContratosRoutes } from './add-contratos.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    AddContratosRoutes,
    CommonModule,
    MenuModule,
    FooterModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  declarations: [AddContratosComponent],
  exports: [AddContratosComponent]
})
export class AddContratosModule { }
