import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DespachosAddFormComponent } from './despachos-add-form.component';
import { DespachosAddFormRoutes } from './despachos-add-form.routing.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DespachosAddFormRoutes,
    MenuModule,
    FooterModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [DespachosAddFormComponent]
})
export class DespachosAddFormModule { }

