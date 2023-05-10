import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDespachosComponent } from './add-despachos.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { HttpClientModule } from '@angular/common/http';
import { AddDespachosRoutes } from './add-despachos.routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MenuModule,
    FooterModule,
    HttpClientModule,
    AddDespachosRoutes
  ],
  declarations: [AddDespachosComponent]
})
export class AddDespachosModule { }
